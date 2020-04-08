import Utils from "../Utils";
import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Fish extends cc.Component {

    // 上一次的位置
    lastPos: cc.Vec2 = null;

    GameManager: GameManager = null;

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
        cc.tween(this.node)
            .then(cc.bezierBy(rmdTime, rmdBezier))
            .start();
    }

    public update(dt): void {
        const curPos: cc.Vec2 = this.node.getPosition();
        // 如果两次位置的距离小于1，则不做任何操作
        if (curPos.sub(this.lastPos).mag() < 1) return;
        const x = curPos.x - this.lastPos.x;
        const y = curPos.y - this.lastPos.y;
        // 当前弧度  因为Math.atan2和原来的相差90度，所以需要先用90减去得出的结果
        const radian = (Math.PI / 180 * 90) - Math.atan2(x, y)
        // console.log(Math.atan(y / x), radian)

        // Math.atan(y/ x) // 原始角度，所以要-90
        this.node.angle = cc.misc.radiansToDegrees(radian) - 90;
        if (this.node.x > (cc.winSize.width / 2 + 100)) this.GameManager.putFish(this.node);
        // console.log(-cc.misc.radiansToDegrees(radian),cc.misc.radiansToDegrees(Math.atan(y/ x))-90)
        // this.node.angle = cc.misc.radiansToDegrees(Math.atan(y/ x))-90;
    }
}
