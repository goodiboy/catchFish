import Utils from "../Utils";
import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Fish extends cc.Component {
    // GameManager类
    GameManager: GameManager = null;

    // 上一次的位置
    lastPos: cc.Vec2 = null;

    /**
     * 格式化节点
     * @param GameManager GameManager类
     * @param x x轴位置
     * @param y y轴位置
     * @param name 需要播放的序列帧的名字
     */
    public init(GameManager: GameManager, x: number, y: number, name: string): void {
        this.GameManager = GameManager;
        const v2: cc.Vec2 = cc.v2(x, y)
        this.node.setPosition(v2);
        this.lastPos = v2;
        this.node.getComponent(cc.Animation).play('fishMove' + name);
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

    public update(dt): void {
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
        // if (this.node.x > (cc.winSize.width / 2 + 100)) this.node.destroy();
        // console.log(-cc.misc.radiansToDegrees(radian),cc.misc.radiansToDegrees(Math.atan(y/ x))-90)
        // this.node.angle = cc.misc.radiansToDegrees(Math.atan(y/ x))-90;


        const offsetWidth: number = this.node.width / 2 + 50;
        const offsetHeight: number = this.node.height / 2 + 50;
        // 超出边界移除
        if (this.node.x > (cc.winSize.width / 2 + offsetWidth) || (this.node.y > cc.winSize.height / 2 + offsetHeight) || (this.node.y < -cc.winSize.height / 2 - offsetHeight)) {
            Utils.putPoolNode(this.node, this.GameManager.fishPool)
        }
    }
}
