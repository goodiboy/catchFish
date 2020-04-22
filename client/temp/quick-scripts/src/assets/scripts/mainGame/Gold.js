"use strict";
cc._RF.push(module, '93297BOo+tHCY6Kxj7kx/lw', 'Gold');
// scripts/mainGame/Gold.ts

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
var Gold = /** @class */ (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gold.prototype.init = function (pos, target) {
        var _this = this;
        this.node.setPosition(pos);
        cc.tween(this.node)
            .to(0.8, { position: target, scale: 0.5 })
            .call(function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.goldPool);
        })
            .start();
    };
    Gold = __decorate([
        ccclass
    ], Gold);
    return Gold;
}(cc.Component));
exports.default = Gold;

cc._RF.pop();