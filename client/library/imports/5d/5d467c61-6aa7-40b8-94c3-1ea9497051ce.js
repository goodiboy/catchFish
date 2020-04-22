"use strict";
cc._RF.push(module, '5d467xhaqdAuJTDHqlJcFHO', 'Net');
// scripts/mainGame/Net.ts

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
var MyGlobal_1 = require("../MyGlobal");
var Utils_1 = require("../Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Net = /** @class */ (function (_super) {
    __extends(Net, _super);
    function Net() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Net.prototype.init = function (pos) {
        var _this = this;
        this.node.setPosition(pos);
        var animation = this.getComponent(cc.Animation);
        animation.play();
        // 动画播放完成之后移除时间和回收节点
        animation.on('finished', function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.netPool);
            animation.off('finished');
        });
    };
    Net = __decorate([
        ccclass
    ], Net);
    return Net;
}(cc.Component));
exports.default = Net;

cc._RF.pop();