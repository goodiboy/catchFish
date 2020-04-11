import Utils from "../Utils";
import MyGlobal from "../MyGlobal";
import {FishType} from "../Interface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CoinUp extends cc.Component {

    // 数字的图集
    @property(cc.SpriteAtlas)
    numAtlas: cc.SpriteAtlas = null;

    @property(cc.Sprite)
    num1: cc.Sprite = null;

    @property(cc.Sprite)
    num2: cc.Sprite = null;

    @property(cc.Sprite)
    num3: cc.Sprite = null;

    public init(pos: cc.Vec2, fishType: FishType): void {
        const str: string = fishType.gold.toString();

        // 如果只有一位数，则获取返回null
        this.num1.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[0]);
        this.num2.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[1]);
        this.num3.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[2]);

        this.node.setPosition(pos);
        // 此处使用tween更简单
        const wrap: cc.Node = this.node.getChildByName('wrap');
        const anim: cc.Animation = wrap.getComponent(cc.Animation);
        anim.play();
        anim.on('finished', e => {
            Utils.putPoolNode(this.node, MyGlobal.GameManager.coinUpPool);
        });
    }

}
