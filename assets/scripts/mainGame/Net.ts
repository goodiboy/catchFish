import MyGlobal from "../MyGlobal";
import Utils from "../Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Net extends cc.Component {

    public init(pos: cc.Vec2): void {
        this.node.setPosition(pos)
        const animation: cc.Animation = this.getComponent(cc.Animation)
        animation.play();
        // 动画播放完成之后移除时间和回收节点
        animation.on('finished', e => {
            Utils.putPoolNode(this.node, MyGlobal.GameManager.netPool);
            animation.off('finished');
        });
    }


}
