// 鱼的类型属性
export interface FishType {
    name: string,
    hp: number,
    gold: number
}

/** 导出事件名称枚举 */
export enum MyEvent {
    /** 触摸结束后，射击事件，附带角度参数 */
    TOUCHEND_SHOOT = 'shoot'
}
