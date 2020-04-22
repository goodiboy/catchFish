"use strict";
cc._RF.push(module, '9feb7WBQ4VG9q+NnF8lDvU0', 'Fish');
// scripts/mainGame/Fish.ts

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
var Bullet_1 = require("./Bullet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 上一次的位置
        _this.lastPos = null;
        // 鱼的生命值
        _this.hp = 0;
        // 鱼的状态
        _this.isLive = true;
        // 动画组件
        _this.anim = null;
        // 鱼的类型属性
        _this.fishType = null;
        return _this;
    }
    /**
     * 格式化节点
     * @param x x轴位置
     * @param y y轴位置
     * @param fishType 鱼的类型
     */
    Fish.prototype.init = function (x, y, fishType) {
        this.node.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.fishAtlas.getSpriteFrame("fishMove_" + fishType.name + "_01");
        this.fishType = fishType;
        this.isLive = true;
        // 初始化鱼的血量
        this.hp = fishType.hp;
        // 设置碰撞盒子的大小
        this.getComponent(cc.BoxCollider).size = this.node.getContentSize();
        var v2 = cc.v2(x, y);
        this.node.setPosition(v2);
        this.lastPos = v2;
        this.anim = this.node.getComponent(cc.Animation);
        this.anim.play('fishMove' + fishType.name);
        // 随机游动时长
        var rmdTime = Math.random() * 10 + 8;
        // 随机贝塞尔曲线
        var rmdBezier = Utils_1.default.bezierArray[Math.floor(Math.random() * Utils_1.default.bezierArray.length)];
        // 停止上次正在运行的动作列表
        this.node.stopAllActions();
        cc.tween(this.node)
            .stop()
            .then(cc.bezierBy(rmdTime, rmdBezier))
            .start();
    };
    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    Fish.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        // 如果鱼已经死亡，则不再检测碰撞
        if (!this.isLive)
            return;
        var hurt = other.node.getComponent(Bullet_1.default).getHurt();
        this.hp -= hurt;
        if (this.hp <= 0) {
            this.isLive = false;
            // 停止移动
            this.node.stopAllActions();
            MyGlobal_1.default.GameManager.createCoinUp(this.node.getPosition(), this.fishType);
            MyGlobal_1.default.NumControl.setGoldNum(MyGlobal_1.default.hasGold += this.fishType.gold);
            this.anim.play('fishDead' + this.fishType.name);
            this.anim.on('finished', function (e) {
                Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.fishPool);
                MyGlobal_1.default.GameManager.createGold(_this.node.getPosition());
            });
        }
    };
    Fish.prototype.update = function (dt) {
        var curPos = this.node.getPosition();
        // 如果两次位置的距离小于1，则不做任何操作
        if (curPos.sub(this.lastPos).mag() < 1)
            return;
        var x = curPos.x - this.lastPos.x;
        var y = curPos.y - this.lastPos.y;
        // const radian = Math.atan2(y, x)
        // this.node.angle = cc.misc.radiansToDegrees(radian) - 90;
        // console.log(Math.atan(y / x), radian)
        // Math.atan(y/ x) // 原始角度，所以要-90
        this.node.angle = cc.misc.radiansToDegrees(Math.atan(y / x)) - 90;
        this.lastPos = curPos;
        // if (this.node.x > (cc.winSize.width / 2 + 100)) this.node.destroy();
        // console.log(-cc.misc.radiansToDegrees(radian),cc.misc.radiansToDegrees(Math.atan(y/ x))-90)
        // this.node.angle = cc.misc.radiansToDegrees(Math.atan(y/ x))-90;
        var offsetWidth = this.node.width / 2 + 50;
        var offsetHeight = this.node.height / 2 + 50;
        // 超出边界移除
        if (this.node.x > (cc.winSize.width / 2 + offsetWidth) || (this.node.y > cc.winSize.height / 2 + offsetHeight) || (this.node.y < -cc.winSize.height / 2 - offsetHeight)) {
            Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.fishPool);
        }
    };
    Fish = __decorate([
        ccclass
    ], Fish);
    return Fish;
}(cc.Component));
exports.default = Fish;

cc._RF.pop();