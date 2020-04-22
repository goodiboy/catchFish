import MyGlobal from "../MyGlobal";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NumControl extends cc.Component {

    @property(cc.SpriteAtlas)
    numAtlas: cc.SpriteAtlas = null;

    protected start(): void {
        MyGlobal.NumControl = this;
        this.setGoldNum(MyGlobal.hasGold);
    }

    public setGoldNum(val): void {
        const count = val.toString().padStart(6, '0');
        for (let i = 0; i < 6; i++) {
            this.node.children[i].getComponent(cc.Sprite).spriteFrame = this.numAtlas.getSpriteFrame(count[i]);
        }
    }
}
