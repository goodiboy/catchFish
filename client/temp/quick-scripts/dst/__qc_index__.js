
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Interface');
require('./assets/scripts/MyGlobal');
require('./assets/scripts/Utils');
require('./assets/scripts/config/config');
require('./assets/scripts/mainGame/Bullet');
require('./assets/scripts/mainGame/CoinUp');
require('./assets/scripts/mainGame/Fish');
require('./assets/scripts/mainGame/GameManager');
require('./assets/scripts/mainGame/GameOver');
require('./assets/scripts/mainGame/Gold');
require('./assets/scripts/mainGame/Net');
require('./assets/scripts/mainGame/NumControl');
require('./assets/scripts/mainGame/TouchManager');
require('./assets/scripts/mainGame/Weapon');
require('./assets/scripts/startGame/StartBtn');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();