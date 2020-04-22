
(function () {
var scripts = [{"deps":{"./assets/scripts/Utils":2,"./assets/scripts/Interface":4,"./assets/scripts/mainGame/GameManager":1,"./assets/scripts/mainGame/Fish":10,"./assets/scripts/mainGame/CoinUp":11,"./assets/scripts/mainGame/GameOver":13,"./assets/scripts/mainGame/Gold":14,"./assets/scripts/mainGame/Net":5,"./assets/scripts/mainGame/NumControl":12,"./assets/scripts/mainGame/TouchManager":7,"./assets/scripts/mainGame/Weapon":6,"./assets/scripts/mainGame/Bullet":9,"./assets/scripts/startGame/StartBtn":3,"./assets/scripts/MyGlobal":8},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./Fish":10,"../Interface":4,"../Utils":2,"./Bullet":9,"../MyGlobal":8,"./CoinUp":11,"./Gold":14},"path":"preview-scripts/assets/scripts/mainGame/GameManager.js"},{"deps":{"./MyGlobal":8},"path":"preview-scripts/assets/scripts/Utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/startGame/StartBtn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Interface.js"},{"deps":{"../MyGlobal":8,"../Utils":2},"path":"preview-scripts/assets/scripts/mainGame/Net.js"},{"deps":{"../Interface":4,"../MyGlobal":8},"path":"preview-scripts/assets/scripts/mainGame/Weapon.js"},{"deps":{"../Interface":4,"../MyGlobal":8},"path":"preview-scripts/assets/scripts/mainGame/TouchManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MyGlobal.js"},{"deps":{"../MyGlobal":8,"../Utils":2,"./Net":5,"./Fish":10},"path":"preview-scripts/assets/scripts/mainGame/Bullet.js"},{"deps":{"../MyGlobal":8,"../Utils":2,"./Bullet":9},"path":"preview-scripts/assets/scripts/mainGame/Fish.js"},{"deps":{"../Utils":2,"../MyGlobal":8},"path":"preview-scripts/assets/scripts/mainGame/CoinUp.js"},{"deps":{"../MyGlobal":8},"path":"preview-scripts/assets/scripts/mainGame/NumControl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/mainGame/GameOver.js"},{"deps":{"../MyGlobal":8,"../Utils":2},"path":"preview-scripts/assets/scripts/mainGame/Gold.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    