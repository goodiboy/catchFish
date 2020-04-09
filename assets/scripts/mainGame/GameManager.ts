import Fish from "./Fish";
import {MyEvent, FishType} from "../Interface";
import Utils from "../Utils";
import Bullet from "./Bullet";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    // 鱼的预制体
    @property(cc.Prefab)
    fishPrefab: cc.Prefab = null;

    // 炮弹预制体
    @property(cc.Prefab)
    bulletPrefab: cc.Prefab = null;

    // 鱼游动的层
    @property(cc.Node)
    fishLayer: cc.Node = null;

    // 炮台节点
    @property(cc.Node)
    weapon: cc.Node = null;

    // 鱼的对象池
    public fishPool: cc.NodePool = new cc.NodePool();

    // 炮弹的对象池
    public bulletPool: cc.NodePool = new cc.NodePool();

    // 鱼的类型
    public fishType: FishType[] = [];


    protected onLoad(): void {
        cc.loader.loadRes('fishConfig', cc.JsonAsset, (err, res: cc.JsonAsset): void => {
            if (err) {
                console.error(err)
                return;
            }
            this.fishType = res.json;
            this.createFish();
            this.schedule(this.createFish, 2);
        });

        cc.director.on(MyEvent.TOUCHEND_SHOOT, this.fireBullet, this);
    }


    public fireBullet(angle): void {
        const bullet: cc.Node = Utils.getPoolNode(this.bulletPool, this.bulletPrefab);
        // 等待 0.5秒的炮台发射动画
        // this.scheduleOnce(e => {
            bullet.parent = this.fishLayer;
            bullet.getComponent(Bullet).init(this, angle);
        // }, 0.3);
    }

    // 创建鱼
    public createFish(): void {
        let fishCount: number = 3;
        let fishNode: cc.Node = null;
        for (let i = 0; i < fishCount; i++) {
            fishNode = Utils.getPoolNode(this.fishPool, this.fishPrefab);
            const x = -Math.random() * 150 - this.node.width / 2 - 100;
            const y = Math.random() * 500 - 250;
            const name = this.fishType[Math.floor(Math.random() * this.fishType.length)].name;
            fishNode.getComponent(Fish).init(this, x, y, name);
            fishNode.parent = this.fishLayer;
        }
    }
}
