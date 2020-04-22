"use strict";
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