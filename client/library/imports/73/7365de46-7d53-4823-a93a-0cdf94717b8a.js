"use strict";
cc._RF.push(module, '7365d5GfVNII6k6DN+UcXuK', 'NumControl');
// scripts/mainGame/NumControl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumControl = /** @class */ (function (_super) {
    __extends(NumControl, _super);
    function NumControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numAtlas = null;
        return _this;
    }
    NumControl.prototype.start = function () {
        MyGlobal_1.default.NumControl = this;
        this.setGoldNum(MyGlobal_1.default.hasGold);
    };
    NumControl.prototype.setGoldNum = function (val) {
        var count = val.toString().padStart(6, '0');
        for (var i = 0; i < 6; i++) {
            this.node.children[i].getComponent(cc.Sprite).spriteFrame = this.numAtlas.getSpriteFrame(count[i]);
        }
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], NumControl.prototype, "numAtlas", void 0);
    NumControl = __decorate([
        ccclass
    ], NumControl);
    return NumControl;
}(cc.Component));
exports.default = NumControl;

cc._RF.pop();