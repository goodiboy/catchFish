
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/TouchManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3da55z4145E6Yk7y9UEo/Ku', 'TouchManager');
// scripts/mainGame/TouchManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Interface_1 = require("../Interface");
var MyGlobal_1 = require("../MyGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchManager = /** @class */ (function (_super) {
    __extends(TouchManager, _super);
    function TouchManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 炮台
        _this.weapon = null;
        // 上一次点击的好时间
        _this.lastTouchTime = 0;
        return _this;
        // update (dt) {}
    }
    TouchManager.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
    };
    TouchManager.prototype._touchStart = function (e) {
        if (Date.now() - this.lastTouchTime < 100 || MyGlobal_1.default.hasGold < MyGlobal_1.default.weaponLevel) {
            return;
        }
        this.lastTouchTime = Date.now();
        // 世界坐标转局部坐标
        var curTouch = this.weapon.parent.convertToNodeSpaceAR(e.getLocation());
        var x = Math.abs(curTouch.x - this.weapon.x);
        var y = Math.abs(curTouch.y - this.weapon.y);
        var radian = Math.atan(x / y);
        var angle = cc.misc.radiansToDegrees(radian);
        if (curTouch.x > this.weapon.x && curTouch.y > this.weapon.y) {
            angle = -angle;
        }
        else if (curTouch.x > this.weapon.x && curTouch.y < this.weapon.y) {
            angle = -(90 - angle) - 90;
        }
        else if (curTouch.x < this.weapon.x && curTouch.y < this.weapon.y) {
            angle = (90 - angle) + 90;
        }
        /**
         * 简便方法
         const radian: number = Math.atan2(y, x);
         let angle: number = cc.misc.radiansToDegrees(radian) - 90;
         */
        this.weapon.angle = angle;
        cc.director.emit(Interface_1.MyEvent.TOUCHEND_SHOOT, angle);
    };
    __decorate([
        property(cc.Node)
    ], TouchManager.prototype, "weapon", void 0);
    TouchManager = __decorate([
        ccclass
    ], TouchManager);
    return TouchManager;
}(cc.Component));
exports.default = TouchManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL1RvdWNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsd0NBQW1DO0FBRTdCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUFrREM7UUE5Q0csS0FBSztRQUVMLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBWTtRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDOztRQXdDMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q2EsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBR08sa0NBQVcsR0FBbkIsVUFBb0IsQ0FBc0I7UUFFdEMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksa0JBQVEsQ0FBQyxPQUFPLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDbEYsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFaEMsWUFBWTtRQUNaLElBQU0sUUFBUSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRW5GLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDMUQsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFBO1NBQ2pCO2FBQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDakUsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO1NBQzdCO2FBQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDakUsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtRQUNEOzs7O1dBSUc7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBTE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlEaEM7SUFBRCxtQkFBQztDQWpERCxBQWlEQyxDQWpEeUMsRUFBRSxDQUFDLFNBQVMsR0FpRHJEO2tCQWpEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TXlFdmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZVwiO1xuaW1wb3J0IE15R2xvYmFsIGZyb20gXCIuLi9NeUdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIC8vIOeCruWPsFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdlYXBvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDkuIrkuIDmrKHngrnlh7vnmoTlpb3ml7bpl7RcbiAgICBsYXN0VG91Y2hUaW1lOiBudW1iZXIgPSAwO1xuXG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLmxhc3RUb3VjaFRpbWUgPCAxMDAgfHwgTXlHbG9iYWwuaGFzR29sZCA8IE15R2xvYmFsLndlYXBvbkxldmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VG91Y2hUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyDkuJbnlYzlnZDmoIfovazlsYDpg6jlnZDmoIdcbiAgICAgICAgY29uc3QgY3VyVG91Y2g6IGNjLlZlYzIgPSB0aGlzLndlYXBvbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKTtcblxuICAgICAgICBjb25zdCB4ID0gTWF0aC5hYnMoY3VyVG91Y2gueCAtIHRoaXMud2VhcG9uLngpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5hYnMoY3VyVG91Y2gueSAtIHRoaXMud2VhcG9uLnkpO1xuICAgICAgICBjb25zdCByYWRpYW46IG51bWJlciA9IE1hdGguYXRhbih4IC8geSk7XG4gICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJhZGlhbik7XG5cbiAgICAgICAgaWYgKGN1clRvdWNoLnggPiB0aGlzLndlYXBvbi54ICYmIGN1clRvdWNoLnkgPiB0aGlzLndlYXBvbi55KSB7XG4gICAgICAgICAgICBhbmdsZSA9IC1hbmdsZVxuICAgICAgICB9IGVsc2UgaWYgKGN1clRvdWNoLnggPiB0aGlzLndlYXBvbi54ICYmIGN1clRvdWNoLnkgPCB0aGlzLndlYXBvbi55KSB7XG4gICAgICAgICAgICBhbmdsZSA9IC0oOTAgLSBhbmdsZSkgLSA5MFxuICAgICAgICB9IGVsc2UgaWYgKGN1clRvdWNoLnggPCB0aGlzLndlYXBvbi54ICYmIGN1clRvdWNoLnkgPCB0aGlzLndlYXBvbi55KSB7XG4gICAgICAgICAgICBhbmdsZSA9ICg5MCAtIGFuZ2xlKSArIDkwO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnroDkvr/mlrnms5VcbiAgICAgICAgIGNvbnN0IHJhZGlhbjogbnVtYmVyID0gTWF0aC5hdGFuMih5LCB4KTtcbiAgICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJhZGlhbikgLSA5MDtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2VhcG9uLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmVtaXQoTXlFdmVudC5UT1VDSEVORF9TSE9PVCwgYW5nbGUpO1xuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==