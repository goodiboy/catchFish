
(function () {
var scripts = [{"deps":{"./assets/scripts/Utils":14,"./assets/scripts/Interface":2,"./assets/scripts/config/config":47,"./assets/scripts/mainGame/CoinUp":13,"./assets/scripts/mainGame/Fish":1,"./assets/scripts/mainGame/GameManager":10,"./assets/scripts/mainGame/GameOver":4,"./assets/scripts/mainGame/Gold":5,"./assets/scripts/mainGame/Net":8,"./assets/scripts/mainGame/NumControl":12,"./assets/scripts/mainGame/TouchManager":9,"./assets/scripts/mainGame/Weapon":11,"./assets/scripts/mainGame/Bullet":7,"./assets/scripts/startGame/StartBtn":3,"./assets/scripts/MyGlobal":6},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Utils":14,"../MyGlobal":6,"./Bullet":7},"path":"preview-scripts/assets/scripts/mainGame/Fish.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Interface.js"},{"deps":{"../config/config":47,"axios":15},"path":"preview-scripts/assets/scripts/startGame/StartBtn.js"},{"deps":{},"path":"preview-scripts/assets/scripts/mainGame/GameOver.js"},{"deps":{"../MyGlobal":6,"../Utils":14},"path":"preview-scripts/assets/scripts/mainGame/Gold.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MyGlobal.js"},{"deps":{"../MyGlobal":6,"../Utils":14,"./Net":8,"./Fish":1},"path":"preview-scripts/assets/scripts/mainGame/Bullet.js"},{"deps":{"../MyGlobal":6,"../Utils":14},"path":"preview-scripts/assets/scripts/mainGame/Net.js"},{"deps":{"../Interface":2,"../MyGlobal":6},"path":"preview-scripts/assets/scripts/mainGame/TouchManager.js"},{"deps":{"./Fish":1,"../Interface":2,"../Utils":14,"./Bullet":7,"../MyGlobal":6,"./CoinUp":13,"./Gold":5},"path":"preview-scripts/assets/scripts/mainGame/GameManager.js"},{"deps":{"../Interface":2,"../MyGlobal":6},"path":"preview-scripts/assets/scripts/mainGame/Weapon.js"},{"deps":{"../MyGlobal":6},"path":"preview-scripts/assets/scripts/mainGame/NumControl.js"},{"deps":{"../Utils":14,"../MyGlobal":6},"path":"preview-scripts/assets/scripts/mainGame/CoinUp.js"},{"deps":{"./MyGlobal":6},"path":"preview-scripts/assets/scripts/Utils.js"},{"deps":{"./lib/axios":16},"path":"preview-scripts/__node_modules/axios/index.js"},{"deps":{"./helpers/spread":18,"./helpers/bind":21,"./cancel/Cancel":24,"./cancel/isCancel":19,"./utils":25,"./core/mergeConfig":17,"./cancel/CancelToken":23,"./core/Axios":22,"./defaults":20},"path":"preview-scripts/__node_modules/axios/lib/axios.js"},{"deps":{"../utils":25},"path":"preview-scripts/__node_modules/axios/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/cancel/isCancel.js"},{"deps":{"../../../../../../../../Applications/CocosCreator/Creator/2.3.2/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":26,"./utils":25,"./adapters/xhr":31,"./helpers/normalizeHeaderName":27,"./adapters/http":31},"path":"preview-scripts/__node_modules/axios/lib/defaults.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/bind.js"},{"deps":{"./../utils":25,"./mergeConfig":17,"../helpers/buildURL":28,"./InterceptorManager":29,"./dispatchRequest":30},"path":"preview-scripts/__node_modules/axios/lib/core/Axios.js"},{"deps":{"./Cancel":24},"path":"preview-scripts/__node_modules/axios/lib/cancel/CancelToken.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/cancel/Cancel.js"},{"deps":{"./helpers/bind":21},"path":"preview-scripts/__node_modules/axios/lib/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"../utils":25},"path":"preview-scripts/__node_modules/axios/lib/helpers/normalizeHeaderName.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/helpers/buildURL.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/core/InterceptorManager.js"},{"deps":{"./../utils":25,"../cancel/isCancel":19,"../defaults":20,"./transformData":34},"path":"preview-scripts/__node_modules/axios/lib/core/dispatchRequest.js"},{"deps":{"./../helpers/buildURL":28,"./../utils":25,"./../core/settle":32,"./../helpers/parseHeaders":36,"./../helpers/isURLSameOrigin":35,"./../helpers/cookies":37,"../core/buildFullPath":33,"../core/createError":38},"path":"preview-scripts/__node_modules/axios/lib/adapters/xhr.js"},{"deps":{"./createError":38},"path":"preview-scripts/__node_modules/axios/lib/core/settle.js"},{"deps":{"../helpers/isAbsoluteURL":40,"../helpers/combineURLs":39},"path":"preview-scripts/__node_modules/axios/lib/core/buildFullPath.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/core/transformData.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/helpers/isURLSameOrigin.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/helpers/parseHeaders.js"},{"deps":{"./../utils":25},"path":"preview-scripts/__node_modules/axios/lib/helpers/cookies.js"},{"deps":{"./enhanceError":41},"path":"preview-scripts/__node_modules/axios/lib/core/createError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/combineURLs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/helpers/isAbsoluteURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios/lib/core/enhanceError.js"},{"deps":{"./parse":45,"./formats":43,"./stringify":44},"path":"preview-scripts/__node_modules/qs/lib/index.js"},{"deps":{"./utils":46},"path":"preview-scripts/__node_modules/qs/lib/formats.js"},{"deps":{"./formats":43,"./utils":46},"path":"preview-scripts/__node_modules/qs/lib/stringify.js"},{"deps":{"./utils":46},"path":"preview-scripts/__node_modules/qs/lib/parse.js"},{"deps":{},"path":"preview-scripts/__node_modules/qs/lib/utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/config/config.js"}];
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
    