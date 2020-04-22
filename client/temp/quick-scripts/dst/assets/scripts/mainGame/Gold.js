
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/Gold.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93297BOo+tHCY6Kxj7kx/lw', 'Gold');
// scripts/mainGame/Gold.ts

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
var Gold = /** @class */ (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gold.prototype.init = function (pos, target) {
        var _this = this;
        this.node.setPosition(pos);
        cc.tween(this.node)
            .to(0.8, { position: target, scale: 0.5 })
            .call(function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.goldPool);
        })
            .start();
    };
    Gold = __decorate([
        ccclass
    ], Gold);
    return Gold;
}(cc.Component));
exports.default = Gold;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL0dvbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtDQUE2QjtBQUV2QixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDOztJQVdBLENBQUM7SUFUVSxtQkFBSSxHQUFYLFVBQVksR0FBWSxFQUFFLE1BQWU7UUFBekMsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUM7YUFDdkMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNILGVBQUssQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBVmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FXeEI7SUFBRCxXQUFDO0NBWEQsQUFXQyxDQVhpQyxFQUFFLENBQUMsU0FBUyxHQVc3QztrQkFYb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUdsb2JhbCBmcm9tIFwiLi4vTXlHbG9iYWxcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vVXRpbHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2xkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBpbml0KHBvczogY2MuVmVjMiwgdGFyZ2V0OiBjYy5WZWMyKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC44LCB7cG9zaXRpb246IHRhcmdldCwgc2NhbGU6IDAuNX0pXG4gICAgICAgICAgICAuY2FsbChlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlscy5wdXRQb29sTm9kZSh0aGlzLm5vZGUsIE15R2xvYmFsLkdhbWVNYW5hZ2VyLmdvbGRQb29sKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cbn1cbiJdfQ==