import GameManager from "./mainGame/GameManager";
import NumControl from "./mainGame/NumControl";

// 全局的数据
export default class MyGlobal {
    private constructor() {
    }

    public static weaponLevel: number;

    // 拥有的金币数量
    public static hasGold: number;

    // 金币数量管理
    public static NumControl: NumControl;

    // 当前存在的炮弹数量
    public static bulletCount: number;

    // 全局的游戏管理
    public static GameManager: GameManager;


    public static init(): void {
        // 炮台的等级
        MyGlobal.weaponLevel = 1;

        // 拥有的金币数量
        MyGlobal.hasGold = 100;

        // 当前存在的炮弹数量
        MyGlobal.bulletCount = 0;
    }
}