export default class Utils {

    private constructor() {
    }


    // 鱼游动的贝塞尔曲线
    public static bezierArray: cc.Vec2[][] = [
        [cc.v2(50, -100), cc.v2(300, -400), cc.v2(1800, -650)],
        [cc.v2(100, -200), cc.v2(400, -300), cc.v2(1800, -600)],
        [cc.v2(150, -300), cc.v2(600, -400), cc.v2(1800, -500)],
        [cc.v2(50, 50), cc.v2(400, 100), cc.v2(1800, 200)],
        [cc.v2(80, 200), cc.v2(300, 500), cc.v2(1800, 650)],
        [cc.v2(100, 100), cc.v2(350, 400), cc.v2(1800, 500)],
        [cc.v2(100, 2), cc.v2(350, -2), cc.v2(1800, 0)]
    ]
}