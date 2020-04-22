"use strict";
cc._RF.push(module, 'ca8b3ylzJlBTJ1TNlBoVJuS', 'MyGlobal');
// scripts/MyGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 全局的数据
var MyGlobal = /** @class */ (function () {
    function MyGlobal() {
    }
    MyGlobal.init = function () {
        // 炮台的等级
        MyGlobal.weaponLevel = 1;
        // 拥有的金币数量
        MyGlobal.hasGold = 100;
        // 当前存在的炮弹数量
        MyGlobal.bulletCount = 0;
    };
    return MyGlobal;
}());
exports.default = MyGlobal;

cc._RF.pop();