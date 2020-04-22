"use strict";
cc._RF.push(module, '9864foDAV9JkIagS24VXMVZ', 'Weapon');
// scripts/mainGame/Weapon.ts

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
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Weapon.prototype.onLoad = function () {
        var _this = this;
        cc.director.on(Interface_1.MyEvent.TOUCHEND_SHOOT, function (e) {
            _this.getComponent(cc.Animation).play('weaponLevel' + MyGlobal_1.default.weaponLevel);
        }, this);
    };
    // 武器升级
    Weapon.prototype.weaponUp = function () {
        MyGlobal_1.default.weaponLevel++;
        if (MyGlobal_1.default.weaponLevel > 7) {
            MyGlobal_1.default.weaponLevel = 7;
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal_1.default.weaponLevel + '_1');
    };
    // 武器降级
    Weapon.prototype.weaponDown = function () {
        MyGlobal_1.default.weaponLevel--;
        if (MyGlobal_1.default.weaponLevel < 1) {
            MyGlobal_1.default.weaponLevel = 1;
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal_1.default.weaponLevel + '_1');
    };
    Weapon = __decorate([
        ccclass
    ], Weapon);
    return Weapon;
}(cc.Component));
exports.default = Weapon;

cc._RF.pop();