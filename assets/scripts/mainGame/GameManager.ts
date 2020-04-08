import Fish from "./Fish";
import {FishType} from "./Interface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    // 鱼的预制体
    @property(cc.Prefab)
    fishPrefab: cc.Node = null;

    // 鱼的对象池
    fishPool: cc.NodePool = new cc.NodePool();

    // 鱼游动的层
    @property(cc.Node)
    fishLayer: cc.Node = null;

    // 鱼的类型
    fishType: FishType[] = [];

    protected onLoad(): void {
        console.log(1)
        cc.loader.loadRes('fishConfig', cc.JsonAsset, (err, res: cc.JsonAsset): void => {
            if (err) {
                console.error(err)
                return;
            }
            this.fishType = res.json;
            this.createFish();

            // this.schedule(this.createFish, 2);
        });
    }

    start() {
    }


    public createFish(): void {
        let fishCount: number = 3;
        let fishNode: cc.Node = null;
        for (let i = 0; i < fishCount; i++) {
            fishNode = this.getFish();
            const x = -Math.random() * 150 - this.node.width / 2;
            const y = Math.random() * 500 - 250;
            const name = this.fishType[Math.floor(Math.random() * this.fishType.length)].name;
            fishNode.getComponent(Fish).init(this, x, y, name);
            fishNode.parent = this.fishLayer;
        }
    }


    // 获取克隆鱼
    public getFish(): cc.Node {
        let fish: cc.Node = null;
        if (this.fishPool.size() > 0) {
            fish = this.fishPool.get();
        } else {
            fish = cc.instantiate(this.fishPrefab);
        }
        return fish;
    }

    /**
     * 把鱼放回池中
     * @param fish 鱼
     */
    public putFish(fish: cc.Node): void {
        this.fishPool.put(fish);
    }


}
