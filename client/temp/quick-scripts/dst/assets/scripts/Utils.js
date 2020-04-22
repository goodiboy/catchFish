
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQWtDO0FBRWxDLE1BQU07QUFDTjtJQUVJO0lBQ0EsQ0FBQztJQW1FRDs7OztPQUlHO0lBQ1csaUJBQVcsR0FBekIsVUFBMEIsUUFBcUIsRUFBRSxNQUFpQjtRQUM5RCxJQUFJLElBQUksR0FBWSxJQUFJLENBQUM7UUFDekIsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxpQkFBVyxHQUF6QixVQUEwQixJQUFhLEVBQUUsUUFBcUI7UUFDMUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztJQUNHLGtCQUFZLEdBQTFCO1FBQ0ksT0FBTyxrQkFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksa0JBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUE1RkQsWUFBWTtJQUNFLGlCQUFXLEdBQWdCO1FBQ3JDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNsRCxDQUFBO0lBRUQsU0FBUztJQUNLLGNBQVEsR0FBZTtRQUNqQztZQUNJLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxDQUFDO1lBQ1AsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNEO1lBQ0ksTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1NBQ2I7UUFDRDtZQUNJLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtTQUNiO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNEO1lBQ0ksTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1NBQ2I7UUFDRDtZQUNJLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtTQUNiO1FBQ0Q7WUFDSSxNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNEO1lBQ0ksTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1NBQ2I7UUFDRDtZQUNJLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtTQUNiO0tBQ0osQ0FBQTtJQThCTCxZQUFDO0NBbEdELEFBa0dDLElBQUE7a0JBbEdvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXNoVHlwZX0gZnJvbSBcIi4vSW50ZXJmYWNlXCI7XG5pbXBvcnQgTXlHbG9iYWwgZnJvbSBcIi4vTXlHbG9iYWxcIjtcblxuLy8g5YWs5YWx57G7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8vIOmxvOa4uOWKqOeahOi0neWhnuWwlOabsue6v1xuICAgIHB1YmxpYyBzdGF0aWMgYmV6aWVyQXJyYXk6IGNjLlZlYzJbXVtdID0gW1xuICAgICAgICBbY2MudjIoNTAsIC0xMDApLCBjYy52MigzMDAsIC00MDApLCBjYy52MigxODAwLCAtNjUwKV0sXG4gICAgICAgIFtjYy52MigxMDAsIC0yMDApLCBjYy52Mig0MDAsIC0zMDApLCBjYy52MigxODAwLCAtNjAwKV0sXG4gICAgICAgIFtjYy52MigxNTAsIC0zMDApLCBjYy52Mig2MDAsIC00MDApLCBjYy52MigxODAwLCAtNTAwKV0sXG4gICAgICAgIFtjYy52Mig1MCwgNTApLCBjYy52Mig0MDAsIDEwMCksIGNjLnYyKDE4MDAsIDIwMCldLFxuICAgICAgICBbY2MudjIoODAsIDIwMCksIGNjLnYyKDMwMCwgNTAwKSwgY2MudjIoMTgwMCwgNjUwKV0sXG4gICAgICAgIFtjYy52MigxMDAsIDEwMCksIGNjLnYyKDM1MCwgNDAwKSwgY2MudjIoMTgwMCwgNTAwKV0sXG4gICAgICAgIFtjYy52MigxMDAsIDIpLCBjYy52MigzNTAsIC0yKSwgY2MudjIoMTgwMCwgMCldXG4gICAgXVxuXG4gICAgLy8g6bG855qE6YWN572u5bGe5oCnXG4gICAgcHVibGljIHN0YXRpYyBmaXNoVHlwZTogRmlzaFR5cGVbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiMDAwXCIsXG4gICAgICAgICAgICBcImhwXCI6IDQsXG4gICAgICAgICAgICBcImdvbGRcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCIwMDFcIixcbiAgICAgICAgICAgIFwiaHBcIjogOCxcbiAgICAgICAgICAgIFwiZ29sZFwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIjAwMlwiLFxuICAgICAgICAgICAgXCJocFwiOiAxMixcbiAgICAgICAgICAgIFwiZ29sZFwiOiAxMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCIwMDNcIixcbiAgICAgICAgICAgIFwiaHBcIjogMTYsXG4gICAgICAgICAgICBcImdvbGRcIjogMTNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiMDA0XCIsXG4gICAgICAgICAgICBcImhwXCI6IDIwLFxuICAgICAgICAgICAgXCJnb2xkXCI6IDE3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIjAwNVwiLFxuICAgICAgICAgICAgXCJocFwiOiAyNCxcbiAgICAgICAgICAgIFwiZ29sZFwiOiAyMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCIwMDZcIixcbiAgICAgICAgICAgIFwiaHBcIjogMjgsXG4gICAgICAgICAgICBcImdvbGRcIjogMjJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiMDA3XCIsXG4gICAgICAgICAgICBcImhwXCI6IDMyLFxuICAgICAgICAgICAgXCJnb2xkXCI6IDI1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIjAwOFwiLFxuICAgICAgICAgICAgXCJocFwiOiAzNixcbiAgICAgICAgICAgIFwiZ29sZFwiOiAyN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCIwMDlcIixcbiAgICAgICAgICAgIFwiaHBcIjogNDAsXG4gICAgICAgICAgICBcImdvbGRcIjogMzBcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiDku47lr7nosaHmsaDkuK3lj5boioLngrlcbiAgICAgKiBAcGFyYW0gbm9kZVBvb2wg6IqC54K55rGgXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTliLbkvZNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFBvb2xOb2RlKG5vZGVQb29sOiBjYy5Ob2RlUG9vbCwgcHJlZmFiOiBjYy5QcmVmYWIpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IGZpc2g6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAobm9kZVBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgZmlzaCA9IG5vZGVQb29sLmdldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlzaCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpc2g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oqK6bG85pS+5Zue5rGg5LitXG4gICAgICogQHBhcmFtIG5vZGUg6IqC54K5XG4gICAgICogQHBhcmFtIG5vZGVQb29sIOWvueixoeaxoFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcHV0UG9vbE5vZGUobm9kZTogY2MuTm9kZSwgbm9kZVBvb2w6IGNjLk5vZGVQb29sKTogdm9pZCB7XG4gICAgICAgIG5vZGVQb29sLnB1dChub2RlKTtcbiAgICB9XG5cbiAgICAvLyDmo4DmtYvmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBwdWJsaWMgc3RhdGljIHRlc3RHYW1lT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE15R2xvYmFsLmhhc0dvbGQgPD0gMCAmJiBNeUdsb2JhbC5idWxsZXRDb3VudCA8PSAwO1xuICAgIH1cbn0iXX0=