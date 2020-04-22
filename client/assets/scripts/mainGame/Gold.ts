import MyGlobal from "../MyGlobal";
import Utils from "../Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Gold extends cc.Component {

    public init(pos: cc.Vec2, target: cc.Vec2): void {
        this.node.setPosition(pos);
        cc.tween(this.node)
            .to(0.8, {position: target, scale: 0.5})
            .call(e => {
                Utils.putPoolNode(this.node, MyGlobal.GameManager.goldPool);
            })
            .start()
    }
}
