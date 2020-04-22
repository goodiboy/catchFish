"use strict";
cc._RF.push(module, '16a20Cy/mtKUJtSGvWrXPF8', 'Bullet');
// scripts/mainGame/Bullet.ts

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
var Net_1 = require("./Net");
var Fish_1 = require("./Fish");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 500;
        // 旋转弧度
        _this.radian = 0;
        return _this;
    }
    /**
     * 初始化炮弹
     * @param angle 炮弹的角度
     */
    Bullet.prototype.init = function (angle) {
        MyGlobal_1.default.bulletCount++;
        this.direction = 1;
        this.bounceCount = 2;
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('bullet' + MyGlobal_1.default.weaponLevel);
        // 角度转弧度
        this.radian = cc.misc.degreesToRadians(angle);
        // 把炮台的坐标转换成世界坐标，再转换成局部坐标
        var worldV2 = MyGlobal_1.default.GameManager.weapon.parent.convertToWorldSpaceAR(MyGlobal_1.default.GameManager.weapon.getPosition());
        var v2 = this.node.parent.convertToNodeSpaceAR(worldV2);
        // 用三角函数求出目标位置点   角度相反
        var targetPos = cc.v2(v2.x + 10 * -Math.sin(this.radian), v2.y + 10 * Math.cos(this.radian));
        this.node.setPosition(targetPos);
        this.node.angle = angle;
    };
    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    Bullet.prototype.onCollisionEnter = function (other, self) {
        // 如果鱼已经死亡，则不再检测碰撞
        if (!other.node.getComponent(Fish_1.default).isLive)
            return;
        Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.bulletPool);
        var net = Utils_1.default.getPoolNode(MyGlobal_1.default.GameManager.netPool, MyGlobal_1.default.GameManager.netPrefab);
        net.parent = MyGlobal_1.default.GameManager.fishLayer;
        net.getComponent(Net_1.default).init(this.node.getPosition());
        MyGlobal_1.default.bulletCount--;
        MyGlobal_1.default.GameManager.testGameOver();
    };
    Bullet.prototype.update = function (dt) {
        var dx = this.node.x;
        var dy = this.node.y;
        // console.log(dx,cc.winSize.width/2)
        if (this.bounceCount > 0) {
            if (Math.abs(dx) > cc.winSize.width / 2) {
                // 如果超出横向屏幕，则旋转他们的角度和弧度
                this.radian = -this.radian;
                this.node.angle = -this.node.angle;
                this.bounceCount--;
            }
            else if (dy > cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            }
            else if (dy < -cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            }
        }
        dx -= this.speed * dt * Math.sin(this.radian);
        dy += this.speed * dt * Math.cos(this.radian) * this.direction;
        this.node.setPosition(cc.v2(dx, dy));
        // 好处屏幕之后回收炮弹
        if ((Math.abs(dx) - cc.winSize.width / 2 > 100) || (Math.abs(dy) - cc.winSize.height / 2 > 100)) {
            Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.bulletPool);
            MyGlobal_1.default.bulletCount--;
            MyGlobal_1.default.GameManager.testGameOver();
        }
    };
    // 获取炮弹的伤害
    Bullet.prototype.getHurt = function () {
        var hurt = MyGlobal_1.default.weaponLevel * 2;
        return Math.ceil(Math.random() * hurt + MyGlobal_1.default.weaponLevel);
    };
    __decorate([
        property(cc.Integer)
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();