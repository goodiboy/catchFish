import Utils from "../Utils";
import MyGlobal from "../MyGlobal";
import {FishType} from "../Interface";
import Bullet from "./Bullet";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Fish extends cc.Component {

    // 上一次的位置
    lastPos: cc.Vec2 = null;

    // 鱼的生命值
    hp: number = 0;

    // 鱼的状态
    isLive: boolean = true;

    // 动画组件
    anim: cc.Animation = null;

    // 鱼的类型属性
    fishType: FishType = null;

    /**
     * 格式化节点
     * @param x x轴位置
     * @param y y轴位置
     * @param fishType 鱼的类型
     */
    public init(x: number, y: number, fishType: FishType): void {
        this.node.getComponent(cc.Sprite).spriteFrame = MyGlobal.GameManager.fishAtlas.getSpriteFrame("fishMove_" + fishType.name + "_01")
        this.fishType = fishType;
        this.isLive = true;
        // 初始化鱼的血量
        this.hp = fishType.hp;
        // 设置碰撞盒子的大小
        this.getComponent(cc.BoxCollider).size = this.node.getContentSize();
        const v2: cc.Vec2 = cc.v2(x, y)
        this.node.setPosition(v2);
        this.lastPos = v2;
        this.anim = this.node.getComponent(cc.Animation);
        this.anim.play('fishMove' + fishType.name);
        // 随机游动时长
        const rmdTime: number = Math.random() * 10 + 8;
        // 随机贝塞尔曲线
        const rmdBezier: cc.Vec2[] = Utils.bezierArray[Math.floor(Math.random() * Utils.bezierArray.length)];
        // 停止上次正在运行的动作列表
        this.node.stopAllActions();
        cc.tween(this.node)
            .stop()
            .then(cc.bezierBy(rmdTime, rmdBezier))
            .start();
    }

    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    private onCollisionEnter(other: cc.Collider, self: cc.Collider): void {
        // 如果鱼已经死亡，则不再检测碰撞
        if (!this.isLive) return;
        const hurt = other.node.getComponent(Bullet).getHurt();
        this.hp -= hurt;
        if (this.hp <= 0) {
            this.isLive = false;
            // 停止移动
            this.node.stopAllActions();
            MyGlobal.GameManager.createCoinUp(this.node.getPosition(), this.fishType);
            MyGlobal.NumControl.setGoldNum(MyGlobal.hasGold += this.fishType.gold);
            this.anim.play('fishDead' + this.fishType.name);
            this.anim.on('finished', e => {
                Utils.putPoolNode(this.node, MyGlobal.GameManager.fishPool);
                MyGlobal.GameManager.createGold(this.node.getPosition());
            })
        }
    }

    public update(dt: number): void {
        const curPos: cc.Vec2 = this.node.getPosition();
        // 如果两次位置的距离小于1，则不做任何操作
        if (curPos.sub(this.lastPos).mag() < 1) return;
        const x = curPos.x - this.lastPos.x;
        const y = curPos.y - this.lastPos.y;
        // const radian = Math.atan2(y, x)
        // this.node.angle = cc.misc.radiansToDegrees(radian) - 90;

        // console.log(Math.atan(y / x), radian)

        // Math.atan(y/ x) // 原始角度，所以要-90
        this.node.angle = cc.misc.radiansToDegrees(Math.atan(y / x)) - 90;
        this.lastPos = curPos;
        // if (this.node.x > (cc.winSize.width / 2 + 100)) this.node.destroy();
        // console.log(-cc.misc.radiansToDegrees(radian),cc.misc.radiansToDegrees(Math.atan(y/ x))-90)
        // this.node.angle = cc.misc.radiansToDegrees(Math.atan(y/ x))-90;


        const offsetWidth: number = this.node.width / 2 + 50;
        const offsetHeight: number = this.node.height / 2 + 50;
        // 超出边界移除
        if (this.node.x > (cc.winSize.width / 2 + offsetWidth) || (this.node.y > cc.winSize.height / 2 + offsetHeight) || (this.node.y < -cc.winSize.height / 2 - offsetHeight)) {
            Utils.putPoolNode(this.node, MyGlobal.GameManager.fishPool)
        }
    }
}
