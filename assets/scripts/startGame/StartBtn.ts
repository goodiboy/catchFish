const {ccclass, property} = cc._decorator;

@ccclass
export default class StartBtn extends cc.Component {

    public onClick(): void {
        cc.director.loadScene('mainGame');
    }
}
