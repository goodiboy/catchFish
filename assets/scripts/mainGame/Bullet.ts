import MyGlobal from "../MyGlobal";
import Utils from "../Utils";
import Net from "./Net";
import Fish from "./Fish";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property(cc.Integer)
    speed: number = 500;

    // 旋转弧度
    radian: number = 0;

    // 子弹反弹次数
    bounceCount: number;

    // 方向
    direction: number;

    /**
     * 初始化炮弹
     * @param angle 炮弹的角度
     */
    public init(angle: number): void {
        this.direction = 1;
        this.bounceCount = 2;

        this.getComponent(cc.Sprite).spriteFrame = MyGlobal.GameManager.weaponAtlas.getSpriteFrame('bullet' + MyGlobal.weaponLevel);
        // 角度转弧度
        this.radian = cc.misc.degreesToRadians(angle);
        // 把炮台的坐标转换成世界坐标，再转换成局部坐标
        const worldV2: cc.Vec2 = MyGlobal.GameManager.weapon.parent.convertToWorldSpaceAR(MyGlobal.GameManager.weapon.getPosition());
        const v2: cc.Vec2 = this.node.parent.convertToNodeSpaceAR(worldV2);
        // 用三角函数求出目标位置点   角度相反
        const targetPos: cc.Vec2 = cc.v2(v2.x + 10 * -Math.sin(this.radian), v2.y + 10 * Math.cos(this.radian));
        this.node.setPosition(targetPos);
        this.node.angle = angle;
    }

    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    private onCollisionEnter(other: cc.Collider, self: cc.Collider): void {
        // 如果鱼已经死亡，则不再检测碰撞
        if (!other.node.getComponent(Fish).isLive) return;
        Utils.putPoolNode(this.node, MyGlobal.GameManager.bulletPool);
        const net: cc.Node = Utils.getPoolNode(MyGlobal.GameManager.netPool, MyGlobal.GameManager.netPrefab);
        net.parent = MyGlobal.GameManager.fishLayer;
        net.getComponent(Net).init(this.node.getPosition());
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
        dx -= this.speed * dt * Math.sin(this.radian);
        dy += this.speed * dt * Math.cos(this.radian) * this.direction;
        this.node.setPosition(cc.v2(dx, dy));

        // 好处屏幕之后回收炮弹
        if ((Math.abs(dx) - cc.winSize.width / 2 > 100) || (Math.abs(dy) - cc.winSize.height / 2 > 100)) {
            Utils.putPoolNode(this.node, MyGlobal.GameManager.bulletPool);
        }
    }

    // 获取炮弹的伤害
    public getHurt(): number {
        let hurt = MyGlobal.weaponLevel * 4;
        return Math.ceil(Math.random() * hurt + MyGlobal.weaponLevel);
    }
}
