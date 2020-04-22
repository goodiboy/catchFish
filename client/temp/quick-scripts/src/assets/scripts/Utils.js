"use strict";
cc._RF.push(module, '3918fBPN2tBS5dkne0oY4Ck', 'Utils');
// scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyGlobal_1 = require("./MyGlobal");
// 公共类
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 从对象池中取节点
     * @param nodePool 节点池
     * @param prefab 预制体
     */
    Utils.getPoolNode = function (nodePool, prefab) {
        var fish = null;
        if (nodePool.size() > 0) {
            fish = nodePool.get();
        }
        else {
            fish = cc.instantiate(prefab);
        }
        return fish;
    };
    /**
     * 把鱼放回池中
     * @param node 节点
     * @param nodePool 对象池
     */
    Utils.putPoolNode = function (node, nodePool) {
        nodePool.put(node);
    };
    // 检测游戏是否结束
    Utils.testGameOver = function () {
        return MyGlobal_1.default.hasGold <= 0 && MyGlobal_1.default.bulletCount <= 0;
    };
    // 鱼游动的贝塞尔曲线
    Utils.bezierArray = [
        [cc.v2(50, -100), cc.v2(300, -400), cc.v2(1800, -650)],
        [cc.v2(100, -200), cc.v2(400, -300), cc.v2(1800, -600)],
        [cc.v2(150, -300), cc.v2(600, -400), cc.v2(1800, -500)],
        [cc.v2(50, 50), cc.v2(400, 100), cc.v2(1800, 200)],
        [cc.v2(80, 200), cc.v2(300, 500), cc.v2(1800, 650)],
        [cc.v2(100, 100), cc.v2(350, 400), cc.v2(1800, 500)],
        [cc.v2(100, 2), cc.v2(350, -2), cc.v2(1800, 0)]
    ];
    // 鱼的配置属性
    Utils.fishType = [
        {
            "name": "000",
            "hp": 4,
            "gold": 2
        },
        {
            "name": "001",
            "hp": 8,
            "gold": 6
        },
        {
            "name": "002",
            "hp": 12,
            "gold": 10
        },
        {
            "name": "003",
            "hp": 16,
            "gold": 13
        },
        {
            "name": "004",
            "hp": 20,
            "gold": 17
        },
        {
            "name": "005",
            "hp": 24,
            "gold": 20
        },
        {
            "name": "006",
            "hp": 28,
            "gold": 22
        },
        {
            "name": "007",
            "hp": 32,
            "gold": 25
        },
        {
            "name": "008",
            "hp": 36,
            "gold": 27
        },
        {
            "name": "009",
            "hp": 40,
            "gold": 30
        },
    ];
    return Utils;
}());
exports.default = Utils;

cc._RF.pop();