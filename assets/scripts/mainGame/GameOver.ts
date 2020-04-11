const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {

    onClick() {
        cc.director.loadScene('mainGame');
    }
}
