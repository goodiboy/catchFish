
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/CoinUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9091ebBBAlCJ7XbQHFjz9sO', 'CoinUp');
// scripts/mainGame/CoinUp.ts

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
var Utils_1 = require("../Utils");
var MyGlobal_1 = require("../MyGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinUp = /** @class */ (function (_super) {
    __extends(CoinUp, _super);
    function CoinUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 数字的图集
        _this.numAtlas = null;
        _this.num1 = null;
        _this.num2 = null;
        _this.num3 = null;
        return _this;
    }
    CoinUp.prototype.init = function (pos, fishType) {
        var _this = this;
        var str = fishType.gold.toString();
        // 如果只有一位数，则获取返回null
        this.num1.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[0]);
        this.num2.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[1]);
        this.num3.spriteFrame = this.numAtlas.getSpriteFrame('goldnum_' + str[2]);
        this.node.setPosition(pos);
        // 此处使用tween更简单
        var wrap = this.node.getChildByName('wrap');
        var anim = wrap.getComponent(cc.Animation);
        anim.play();
        anim.on('finished', function (e) {
            Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.coinUpPool);
        });
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], CoinUp.prototype, "numAtlas", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num1", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num2", void 0);
    __decorate([
        property(cc.Sprite)
    ], CoinUp.prototype, "num3", void 0);
    CoinUp = __decorate([
        ccclass
    ], CoinUp);
    return CoinUp;
}(cc.Component));
exports.default = CoinUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL0NvaW5VcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNkI7QUFDN0Isd0NBQW1DO0FBRzdCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUFrQ0M7UUEvQkcsUUFBUTtRQUVSLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQW9CM0IsQ0FBQztJQWxCVSxxQkFBSSxHQUFYLFVBQVksR0FBWSxFQUFFLFFBQWtCO1FBQTVDLGlCQWdCQztRQWZHLElBQU0sR0FBRyxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0Msb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGVBQWU7UUFDZixJQUFNLElBQUksR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFNLElBQUksR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDO1lBQ2pCLGVBQUssQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQWJOLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpQzFCO0lBQUQsYUFBQztDQWpDRCxBQWlDQyxDQWpDbUMsRUFBRSxDQUFDLFNBQVMsR0FpQy9DO2tCQWpDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vVXRpbHNcIjtcbmltcG9ydCBNeUdsb2JhbCBmcm9tIFwiLi4vTXlHbG9iYWxcIjtcbmltcG9ydCB7RmlzaFR5cGV9IGZyb20gXCIuLi9JbnRlcmZhY2VcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luVXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8g5pWw5a2X55qE5Zu+6ZuGXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIG51bUF0bGFzOiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG51bTE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG51bTI6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG51bTM6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgaW5pdChwb3M6IGNjLlZlYzIsIGZpc2hUeXBlOiBGaXNoVHlwZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdHI6IHN0cmluZyA9IGZpc2hUeXBlLmdvbGQudG9TdHJpbmcoKTtcblxuICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkvY3mlbDvvIzliJnojrflj5bov5Tlm55udWxsXG4gICAgICAgIHRoaXMubnVtMS5zcHJpdGVGcmFtZSA9IHRoaXMubnVtQXRsYXMuZ2V0U3ByaXRlRnJhbWUoJ2dvbGRudW1fJyArIHN0clswXSk7XG4gICAgICAgIHRoaXMubnVtMi5zcHJpdGVGcmFtZSA9IHRoaXMubnVtQXRsYXMuZ2V0U3ByaXRlRnJhbWUoJ2dvbGRudW1fJyArIHN0clsxXSk7XG4gICAgICAgIHRoaXMubnVtMy5zcHJpdGVGcmFtZSA9IHRoaXMubnVtQXRsYXMuZ2V0U3ByaXRlRnJhbWUoJ2dvbGRudW1fJyArIHN0clsyXSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIC8vIOatpOWkhOS9v+eUqHR3ZWVu5pu0566A5Y2VXG4gICAgICAgIGNvbnN0IHdyYXA6IGNjLk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dyYXAnKTtcbiAgICAgICAgY29uc3QgYW5pbTogY2MuQW5pbWF0aW9uID0gd3JhcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5wbGF5KCk7XG4gICAgICAgIGFuaW0ub24oJ2ZpbmlzaGVkJywgZSA9PiB7XG4gICAgICAgICAgICBVdGlscy5wdXRQb29sTm9kZSh0aGlzLm5vZGUsIE15R2xvYmFsLkdhbWVNYW5hZ2VyLmNvaW5VcFBvb2wpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==