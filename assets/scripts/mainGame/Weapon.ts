import {MyEvent} from "../Interface";
import MyGlobal from "../MyGlobal";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    
    //炮台图集
    @property(cc.SpriteAtlas)
    weaponAtlas: cc.SpriteAtlas = null;

    protected onLoad(): void {
        cc.director.on(MyEvent.TOUCHEND_SHOOT, e => {
            this.getComponent(cc.Animation).play('weaponLevel' + MyGlobal.weaponLevel);
        });
    }

    // 武器升级
    public weaponUp(): void {
        MyGlobal.weaponLevel++;
        if (MyGlobal.weaponLevel > 7) {
            MyGlobal.weaponLevel = 7;
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = this.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal.weaponLevel + '_1');
    }

    // 武器降级
    public weaponDown(): void {
        MyGlobal.weaponLevel--;
        if (MyGlobal.weaponLevel < 1) {
            MyGlobal.weaponLevel = 1
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = this.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal.weaponLevel + '_1')
    }
}
