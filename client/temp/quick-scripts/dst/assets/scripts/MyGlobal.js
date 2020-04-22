
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MyGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca8b3ylzJlBTJ1TNlBoVJuS', 'MyGlobal');
// scripts/MyGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 全局的数据
var MyGlobal = /** @class */ (function () {
    function MyGlobal() {
    }
    MyGlobal.init = function () {
        // 炮台的等级
        MyGlobal.weaponLevel = 1;
        // 拥有的金币数量
        MyGlobal.hasGold = 100;
        // 当前存在的炮弹数量
        MyGlobal.bulletCount = 0;
    };
    return MyGlobal;
}());
exports.default = MyGlobal;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL015R2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsUUFBUTtBQUNSO0lBQ0k7SUFDQSxDQUFDO0lBaUJhLGFBQUksR0FBbEI7UUFDSSxRQUFRO1FBQ1IsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFekIsVUFBVTtRQUNWLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRXZCLFlBQVk7UUFDWixRQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsZUFBQztBQUFELENBN0JBLEFBNkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vbWFpbkdhbWUvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBOdW1Db250cm9sIGZyb20gXCIuL21haW5HYW1lL051bUNvbnRyb2xcIjtcblxuLy8g5YWo5bGA55qE5pWw5o2uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUdsb2JhbCB7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdlYXBvbkxldmVsOiBudW1iZXI7XG5cbiAgICAvLyDmi6XmnInnmoTph5HluIHmlbDph49cbiAgICBwdWJsaWMgc3RhdGljIGhhc0dvbGQ6IG51bWJlcjtcblxuICAgIC8vIOmHkeW4geaVsOmHj+euoeeQhlxuICAgIHB1YmxpYyBzdGF0aWMgTnVtQ29udHJvbDogTnVtQ29udHJvbDtcblxuICAgIC8vIOW9k+WJjeWtmOWcqOeahOeCruW8ueaVsOmHj1xuICAgIHB1YmxpYyBzdGF0aWMgYnVsbGV0Q291bnQ6IG51bWJlcjtcblxuICAgIC8vIOWFqOWxgOeahOa4uOaIj+euoeeQhlxuICAgIHB1YmxpYyBzdGF0aWMgR2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyO1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIOeCruWPsOeahOetiee6p1xuICAgICAgICBNeUdsb2JhbC53ZWFwb25MZXZlbCA9IDE7XG5cbiAgICAgICAgLy8g5oul5pyJ55qE6YeR5biB5pWw6YePXG4gICAgICAgIE15R2xvYmFsLmhhc0dvbGQgPSAxMDA7XG5cbiAgICAgICAgLy8g5b2T5YmN5a2Y5Zyo55qE54Ku5by55pWw6YePXG4gICAgICAgIE15R2xvYmFsLmJ1bGxldENvdW50ID0gMDtcbiAgICB9XG59Il19