
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16a20Cy/mtKUJtSGvWrXPF8', 'Bullet');
// scripts/mainGame/Bullet.ts

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
var Net_1 = require("./Net");
var Fish_1 = require("./Fish");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 500;
        // 旋转弧度
        _this.radian = 0;
        return _this;
    }
    /**
     * 初始化炮弹
     * @param angle 炮弹的角度
     */
    Bullet.prototype.init = function (angle) {
        MyGlobal_1.default.bulletCount++;
        this.direction = 1;
        this.bounceCount = 2;
        this.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.weaponAtlas.getSpriteFrame('bullet' + MyGlobal_1.default.weaponLevel);
        // 角度转弧度
        this.radian = cc.misc.degreesToRadians(angle);
        // 把炮台的坐标转换成世界坐标，再转换成局部坐标
        var worldV2 = MyGlobal_1.default.GameManager.weapon.parent.convertToWorldSpaceAR(MyGlobal_1.default.GameManager.weapon.getPosition());
        var v2 = this.node.parent.convertToNodeSpaceAR(worldV2);
        // 用三角函数求出目标位置点   角度相反
        var targetPos = cc.v2(v2.x + 10 * -Math.sin(this.radian), v2.y + 10 * Math.cos(this.radian));
        this.node.setPosition(targetPos);
        this.node.angle = angle;
    };
    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    Bullet.prototype.onCollisionEnter = function (other, self) {
        // 如果鱼已经死亡，则不再检测碰撞
        if (!other.node.getComponent(Fish_1.default).isLive)
            return;
        Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.bulletPool);
        var net = Utils_1.default.getPoolNode(MyGlobal_1.default.GameManager.netPool, MyGlobal_1.default.GameManager.netPrefab);
        net.parent = MyGlobal_1.default.GameManager.fishLayer;
        net.getComponent(Net_1.default).init(this.node.getPosition());
        MyGlobal_1.default.bulletCount--;
        MyGlobal_1.default.GameManager.testGameOver();
    };
    Bullet.prototype.update = function (dt) {
        var dx = this.node.x;
        var dy = this.node.y;
        // console.log(dx,cc.winSize.width/2)
        if (this.bounceCount > 0) {
            if (Math.abs(dx) > cc.winSize.width / 2) {
                // 如果超出横向屏幕，则旋转他们的角度和弧度
                this.radian = -this.radian;
                this.node.angle = -this.node.angle;
                this.bounceCount--;
            }
            else if (dy > cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            }
            else if (dy < -cc.winSize.height / 2) {
                // y轴方向需要旋转180度
                this.node.angle = 180 - this.node.angle;
                this.direction = -1;
                this.bounceCount--;
            }
        }
        dx -= this.speed * dt * Math.sin(this.radian);
        dy += this.speed * dt * Math.cos(this.radian) * this.direction;
        this.node.setPosition(cc.v2(dx, dy));
        // 好处屏幕之后回收炮弹
        if ((Math.abs(dx) - cc.winSize.width / 2 > 100) || (Math.abs(dy) - cc.winSize.height / 2 > 100)) {
            Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.bulletPool);
            MyGlobal_1.default.bulletCount--;
            MyGlobal_1.default.GameManager.testGameOver();
        }
    };
    // 获取炮弹的伤害
    Bullet.prototype.getHurt = function () {
        var hurt = MyGlobal_1.default.weaponLevel * 2;
        return Math.ceil(Math.random() * hurt + MyGlobal_1.default.weaponLevel);
    };
    __decorate([
        property(cc.Integer)
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL0J1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0NBQTZCO0FBQzdCLDZCQUF3QjtBQUN4QiwrQkFBMEI7QUFFcEIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQURoRDtRQUFBLHFFQTRGQztRQXhGRyxXQUFLLEdBQVcsR0FBRyxDQUFDO1FBRXBCLE9BQU87UUFDUCxZQUFNLEdBQVcsQ0FBQyxDQUFDOztJQXFGdkIsQ0FBQztJQTdFRzs7O09BR0c7SUFDSSxxQkFBSSxHQUFYLFVBQVksS0FBYTtRQUNyQixrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVILFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMseUJBQXlCO1FBQ3pCLElBQU0sT0FBTyxHQUFZLGtCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBTSxFQUFFLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxD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Qzt5Q0FDRDtJQUhILE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EyRjFCO0lBQUQsYUFBQztDQTNGRCxBQTJGQyxDQTNGbUMsRUFBRSxDQUFDLFNBQVMsR0EyRi9DO2tCQTNGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUdsb2JhbCBmcm9tIFwiLi4vTXlHbG9iYWxcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vVXRpbHNcIjtcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XG5pbXBvcnQgRmlzaCBmcm9tIFwiLi9GaXNoXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwZWVkOiBudW1iZXIgPSA1MDA7XG5cbiAgICAvLyDml4vovazlvKfluqZcbiAgICByYWRpYW46IG51bWJlciA9IDA7XG5cbiAgICAvLyDlrZDlvLnlj43lvLnmrKHmlbBcbiAgICBib3VuY2VDb3VudDogbnVtYmVyO1xuXG4gICAgLy8g5pa55ZCRXG4gICAgZGlyZWN0aW9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbngq7lvLlcbiAgICAgKiBAcGFyYW0gYW5nbGUg54Ku5by555qE6KeS5bqmXG4gICAgICovXG4gICAgcHVibGljIGluaXQoYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBNeUdsb2JhbC5idWxsZXRDb3VudCsrO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuYm91bmNlQ291bnQgPSAyO1xuXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBNeUdsb2JhbC5HYW1lTWFuYWdlci53ZWFwb25BdGxhcy5nZXRTcHJpdGVGcmFtZSgnYnVsbGV0JyArIE15R2xvYmFsLndlYXBvbkxldmVsKTtcbiAgICAgICAgLy8g6KeS5bqm6L2s5byn5bqmXG4gICAgICAgIHRoaXMucmFkaWFuID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcbiAgICAgICAgLy8g5oqK54Ku5Y+w55qE5Z2Q5qCH6L2s5o2i5oiQ5LiW55WM5Z2Q5qCH77yM5YaN6L2s5o2i5oiQ5bGA6YOo5Z2Q5qCHXG4gICAgICAgIGNvbnN0IHdvcmxkVjI6IGNjLlZlYzIgPSBNeUdsb2JhbC5HYW1lTWFuYWdlci53ZWFwb24ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihNeUdsb2JhbC5HYW1lTWFuYWdlci53ZWFwb24uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHYyOiBjYy5WZWMyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFYyKTtcbiAgICAgICAgLy8g55So5LiJ6KeS5Ye95pWw5rGC5Ye655uu5qCH5L2N572u54K5ICAg6KeS5bqm55u45Y+NXG4gICAgICAgIGNvbnN0IHRhcmdldFBvczogY2MuVmVjMiA9IGNjLnYyKHYyLnggKyAxMCAqIC1NYXRoLnNpbih0aGlzLnJhZGlhbiksIHYyLnkgKyAxMCAqIE1hdGguY29zKHRoaXMucmFkaWFuKSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0YXJnZXRQb3MpO1xuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnorDmkp7mo4DmtYtcbiAgICAgKiBAcGFyYW0gb3RoZXIg5YW25LuW56Kw5pKe57uE5Lu2XG4gICAgICogQHBhcmFtIHNlbGYg5b2T5YmN56Kw5pKe57uE5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c6bG85bey57uP5q275Lqh77yM5YiZ5LiN5YaN5qOA5rWL56Kw5pKeXG4gICAgICAgIGlmICghb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRmlzaCkuaXNMaXZlKSByZXR1cm47XG4gICAgICAgIFV0aWxzLnB1dFBvb2xOb2RlKHRoaXMubm9kZSwgTXlHbG9iYWwuR2FtZU1hbmFnZXIuYnVsbGV0UG9vbCk7XG4gICAgICAgIGNvbnN0IG5ldDogY2MuTm9kZSA9IFV0aWxzLmdldFBvb2xOb2RlKE15R2xvYmFsLkdhbWVNYW5hZ2VyLm5ldFBvb2wsIE15R2xvYmFsLkdhbWVNYW5hZ2VyLm5ldFByZWZhYik7XG4gICAgICAgIG5ldC5wYXJlbnQgPSBNeUdsb2JhbC5HYW1lTWFuYWdlci5maXNoTGF5ZXI7XG4gICAgICAgIG5ldC5nZXRDb21wb25lbnQoTmV0KS5pbml0KHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgTXlHbG9iYWwuYnVsbGV0Q291bnQtLTtcbiAgICAgICAgTXlHbG9iYWwuR2FtZU1hbmFnZXIudGVzdEdhbWVPdmVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBkeDogbnVtYmVyID0gdGhpcy5ub2RlLng7XG4gICAgICAgIGxldCBkeTogbnVtYmVyID0gdGhpcy5ub2RlLnk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZHgsY2Mud2luU2l6ZS53aWR0aC8yKVxuICAgICAgICBpZiAodGhpcy5ib3VuY2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiBjYy53aW5TaXplLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOi2heWHuuaoquWQkeWxj+W5le+8jOWImeaXi+i9rOS7luS7rOeahOinkuW6puWSjOW8p+W6plxuICAgICAgICAgICAgICAgIHRoaXMucmFkaWFuID0gLXRoaXMucmFkaWFuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC10aGlzLm5vZGUuYW5nbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3VuY2VDb3VudC0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkeSA+IGNjLndpblNpemUuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIC8vIHnovbTmlrnlkJHpnIDopoHml4vovawxODDluqZcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAxODAgLSB0aGlzLm5vZGUuYW5nbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdW5jZUNvdW50LS07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGR5IDwgLWNjLndpblNpemUuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIC8vIHnovbTmlrnlkJHpnIDopoHml4vovawxODDluqZcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAxODAgLSB0aGlzLm5vZGUuYW5nbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdW5jZUNvdW50LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHggLT0gdGhpcy5zcGVlZCAqIGR0ICogTWF0aC5zaW4odGhpcy5yYWRpYW4pO1xuICAgICAgICBkeSArPSB0aGlzLnNwZWVkICogZHQgKiBNYXRoLmNvcyh0aGlzLnJhZGlhbikgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKGR4LCBkeSkpO1xuXG4gICAgICAgIC8vIOWlveWkhOWxj+W5leS5i+WQjuWbnuaUtueCruW8uVxuICAgICAgICBpZiAoKE1hdGguYWJzKGR4KSAtIGNjLndpblNpemUud2lkdGggLyAyID4gMTAwKSB8fCAoTWF0aC5hYnMoZHkpIC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyID4gMTAwKSkge1xuICAgICAgICAgICAgVXRpbHMucHV0UG9vbE5vZGUodGhpcy5ub2RlLCBNeUdsb2JhbC5HYW1lTWFuYWdlci5idWxsZXRQb29sKTtcbiAgICAgICAgICAgIE15R2xvYmFsLmJ1bGxldENvdW50LS07XG4gICAgICAgICAgICBNeUdsb2JhbC5HYW1lTWFuYWdlci50ZXN0R2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPlueCruW8ueeahOS8pOWus1xuICAgIHB1YmxpYyBnZXRIdXJ0KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBodXJ0ID0gTXlHbG9iYWwud2VhcG9uTGV2ZWwgKiAyO1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBodXJ0ICsgTXlHbG9iYWwud2VhcG9uTGV2ZWwpO1xuICAgIH1cbn1cbiJdfQ==