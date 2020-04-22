"use strict";
cc._RF.push(module, '9091ebBBAlCJ7XbQHFjz9sO', 'CoinUp');
// scripts/mainGame/CoinUp.ts

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
var Utils_1 = require("../Utils");
var MyGlobal_1 = require("../MyGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinUp = /** @class */ (function (_super) {
    __extends(CoinUp, _super);
    function CoinUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 数字的图集
        _this.numAtlas = null;
        _this.num1 = null;
        _this.num2 = null;
        _this.num3 = null;
        return _this;
    }
    CoinUp.prototype.init = function (pos, fishType) {
        var _this = this;
        var str = fishType.gold.toString();
        // 如果只有一位数，则获取返回null
        this.num1.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[0]);
        this.num2.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[1]);
        this.num3.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[2]);
        this.node.setPosition(pos);
        // 此处使用tween更简单
        var wrap = this.node.getChildByName('wrap');
        var anim = wrap.getComponent(cc.Animation);
        anim.play();
        anim.on('finished', function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.coinUpPool);
        });
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], CoinUp.prototype, "numAtlas", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num1", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num2", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num3", void 0);
    CoinUp = __decorate([
        ccclass
    ], CoinUp);
    return CoinUp;
}(cc.Component));
exports.default = CoinUp;

cc._RF.pop();