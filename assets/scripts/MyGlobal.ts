import GameManager from "./mainGame/GameManager";

// 全局的数据
export default class MyGlobal {
    private constructor() {
    }

    // 炮台的等级
    public static weaponLevel: number = 1;

    // 全局的游戏管理
    public static GameManager: GameManager = null;
}