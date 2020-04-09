import GameManager from "./GameManager";
import MyGlobal from "../MyGlobal";
import Utils from "../Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property(cc.Integer)
    speed: number = 5;

    //炮台图集
    @property(cc.SpriteAtlas)
    bulletAtlas: cc.SpriteAtlas = null;

    // 游戏管理类
    GameManager: GameManager = null;

    // 旋转弧度
    radian: number = 0;

    // 子弹反弹次数
    bounceCount: number;

    // 方向
    direction: number;

    public init(GameManager, angle: number): void {
        this.direction = 1;
        this.bounceCount = 2;

        this.GameManager = GameManager;
        this.getComponent(cc.Sprite).spriteFrame = this.bulletAtlas.getSpriteFrame('bullet' + MyGlobal.weaponLevel);
        // 角度转弧度
        this.radian = cc.misc.degreesToRadians(angle);
        // 把炮台的坐标转换成世界坐标，再转换成局部坐标
        const worldV2: cc.Vec2 = GameManager.weapon.parent.convertToWorldSpaceAR(GameManager.weapon.position);
        const v2: cc.Vec2 = this.node.parent.convertToNodeSpaceAR(worldV2);
        // 用三角函数求出目标位置点   角度相反
        const targetPos: cc.Vec2 = cc.v2(v2.x + 10 * -Math.sin(this.radian), v2.y + 10 * Math.cos(this.radian));
        this.node.setPosition(targetPos);
        this.node.angle = angle;
    }

    protected update(dt: number): void {
        let dx: number = this.node.x;
        let dy: number = this.node.y;

        // console.log(dx,cc.winSize.width/2)
        if (this.bounceCount > 0) {
            if (Math.abs(dx) > cc.winSize.width / 2) {
                // 如果超出横向屏幕，则旋转他们的角度和弧度
                this.radian = -this.radian;
                this.node.angle = -this.node.angle;
                this.bounceCount--;
            } else if (dy > cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            } else if (dy < -cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            }
        }
        dx -= this.speed * Math.sin(this.radian);
        dy += this.speed * Math.cos(this.radian) * this.direction;
        this.node.setPosition(cc.v2(dx, dy));

        if ((Math.abs(dx) - cc.winSize.width / 2 > 100) || (Math.abs(dy) - cc.winSize.height / 2 > 100)) {
            console.log('消除')
            Utils.putPoolNode(this.node, this.GameManager.bulletPool);
        }
    }
}
