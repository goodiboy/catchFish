
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/Net.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d467xhaqdAuJTDHqlJcFHO', 'Net');
// scripts/mainGame/Net.ts

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
var MyGlobal_1 = require("../MyGlobal");
var Utils_1 = require("../Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Net = /** @class */ (function (_super) {
    __extends(Net, _super);
    function Net() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Net.prototype.init = function (pos) {
        var _this = this;
        this.node.setPosition(pos);
        var animation = this.getComponent(cc.Animation);
        animation.play();
        // 动画播放完成之后移除时间和回收节点
        animation.on('finished', function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.netPool);
            animation.off('finished');
        });
    };
    Net = __decorate([
        ccclass
    ], Net);
    return Net;
}(cc.Component));
exports.default = Net;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL05ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0NBQTZCO0FBRXZCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVk7SUFBN0M7O0lBY0EsQ0FBQztJQVpVLGtCQUFJLEdBQVgsVUFBWSxHQUFZO1FBQXhCLGlCQVNDO1FBUkcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBTSxTQUFTLEdBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9ELFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixvQkFBb0I7UUFDcEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDO1lBQ3RCLGVBQUssQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhnQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBY3ZCO0lBQUQsVUFBQztDQWRELEFBY0MsQ0FkZ0MsRUFBRSxDQUFDLFNBQVMsR0FjNUM7a0JBZG9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlHbG9iYWwgZnJvbSBcIi4uL015R2xvYmFsXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1V0aWxzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBpbml0KHBvczogY2MuVmVjMik6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICBjb25zdCBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcbiAgICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgICAgLy8g5Yqo55S75pKt5pS+5a6M5oiQ5LmL5ZCO56e76Zmk5pe26Ze05ZKM5Zue5pS26IqC54K5XG4gICAgICAgIGFuaW1hdGlvbi5vbignZmluaXNoZWQnLCBlID0+IHtcbiAgICAgICAgICAgIFV0aWxzLnB1dFBvb2xOb2RlKHRoaXMubm9kZSwgTXlHbG9iYWwuR2FtZU1hbmFnZXIubmV0UG9vbCk7XG4gICAgICAgICAgICBhbmltYXRpb24ub2ZmKCdmaW5pc2hlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl19