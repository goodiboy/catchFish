
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/Weapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9864foDAV9JkIagS24VXMVZ', 'Weapon');
// scripts/mainGame/Weapon.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Interface_1 = require("../Interface");
var MyGlobal_1 = require("../MyGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Weapon.prototype.onLoad = function () {
        var _this = this;
        cc.director.on(Interface_1.MyEvent.TOUCHEND_SHOOT, function (e) {
            _this.getComponent(cc.Animation).play('weaponLevel' + MyGlobal_1.default.weaponLevel);
        }, this);
    };
    // 武器升级
    Weapon.prototype.weaponUp = function () {
        MyGlobal_1.default.weaponLevel++;
        if (MyGlobal_1.default.weaponLevel > 7) {
            MyGlobal_1.default.weaponLevel = 7;
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal_1.default.weaponLevel + '_1');
    };
    // 武器降级
    Weapon.prototype.weaponDown = function () {
        MyGlobal_1.default.weaponLevel--;
        if (MyGlobal_1.default.weaponLevel < 1) {
            MyGlobal_1.default.weaponLevel = 1;
            return;
        }
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('weapon_level_' + MyGlobal_1.default.weaponLevel + '_1');
    };
    Weapon = __decorate([
        ccclass
    ], Weapon);
    return Weapon;
}(cc.Component));
exports.default = Weapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL1dlYXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsd0NBQW1DO0FBRTdCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBMkJBLENBQUM7SUF6QmEsdUJBQU0sR0FBaEI7UUFBQSxpQkFJQztRQUhHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFPLENBQUMsY0FBYyxFQUFFLFVBQUEsQ0FBQztZQUNwQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0UsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELE9BQU87SUFDQSx5QkFBUSxHQUFmO1FBQ0ksa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLGtCQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUMxQixrQkFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLGtCQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlJLENBQUM7SUFFRCxPQUFPO0lBQ0EsMkJBQVUsR0FBakI7UUFDSSxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksa0JBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLGtCQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDN0ksQ0FBQztJQTFCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTJCMUI7SUFBRCxhQUFDO0NBM0JELEFBMkJDLENBM0JtQyxFQUFFLENBQUMsU0FBUyxHQTJCL0M7a0JBM0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNeUV2ZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlXCI7XG5pbXBvcnQgTXlHbG9iYWwgZnJvbSBcIi4uL015R2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKE15RXZlbnQuVE9VQ0hFTkRfU0hPT1QsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCd3ZWFwb25MZXZlbCcgKyBNeUdsb2JhbC53ZWFwb25MZXZlbCk7XG4gICAgICAgIH0sdGhpcyk7XG4gICAgfVxuXG4gICAgLy8g5q2m5Zmo5Y2H57qnXG4gICAgcHVibGljIHdlYXBvblVwKCk6IHZvaWQge1xuICAgICAgICBNeUdsb2JhbC53ZWFwb25MZXZlbCsrO1xuICAgICAgICBpZiAoTXlHbG9iYWwud2VhcG9uTGV2ZWwgPiA3KSB7XG4gICAgICAgICAgICBNeUdsb2JhbC53ZWFwb25MZXZlbCA9IDc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IE15R2xvYmFsLkdhbWVNYW5hZ2VyLndlYXBvbkF0bGFzLmdldFNwcml0ZUZyYW1lKCd3ZWFwb25fbGV2ZWxfJyArIE15R2xvYmFsLndlYXBvbkxldmVsICsgJ18xJyk7XG4gICAgfVxuXG4gICAgLy8g5q2m5Zmo6ZmN57qnXG4gICAgcHVibGljIHdlYXBvbkRvd24oKTogdm9pZCB7XG4gICAgICAgIE15R2xvYmFsLndlYXBvbkxldmVsLS07XG4gICAgICAgIGlmIChNeUdsb2JhbC53ZWFwb25MZXZlbCA8IDEpIHtcbiAgICAgICAgICAgIE15R2xvYmFsLndlYXBvbkxldmVsID0gMVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBNeUdsb2JhbC5HYW1lTWFuYWdlci53ZWFwb25BdGxhcy5nZXRTcHJpdGVGcmFtZSgnd2VhcG9uX2xldmVsXycgKyBNeUdsb2JhbC53ZWFwb25MZXZlbCArICdfMScpXG4gICAgfVxufVxuIl19