
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/Fish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9feb7WBQ4VG9q+NnF8lDvU0', 'Fish');
// scripts/mainGame/Fish.ts

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
var Bullet_1 = require("./Bullet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 上一次的位置
        _this.lastPos = null;
        // 鱼的生命值
        _this.hp = 0;
        // 鱼的状态
        _this.isLive = true;
        // 动画组件
        _this.anim = null;
        // 鱼的类型属性
        _this.fishType = null;
        return _this;
    }
    /**
     * 格式化节点
     * @param x x轴位置
     * @param y y轴位置
     * @param fishType 鱼的类型
     */
    Fish.prototype.init = function (x, y, fishType) {
        this.node.getComponent(cc.Sprite).spriteFrame = MyGlobal_1.default.GameManager.fishAtlas.getSpriteFrame("fishMove_" + fishType.name + "_01");
        this.fishType = fishType;
        this.isLive = true;
        // 初始化鱼的血量
        this.hp = fishType.hp;
        // 设置碰撞盒子的大小
        this.getComponent(cc.BoxCollider).size = this.node.getContentSize();
        var v2 = cc.v2(x, y);
        this.node.setPosition(v2);
        this.lastPos = v2;
        this.anim = this.node.getComponent(cc.Animation);
        this.anim.play('fishMove' + fishType.name);
        // 随机游动时长
        var rmdTime = Math.random() * 10 + 8;
        // 随机贝塞尔曲线
        var rmdBezier = Utils_1.default.bezierArray[Math.floor(Math.random() * Utils_1.default.bezierArray.length)];
        // 停止上次正在运行的动作列表
        this.node.stopAllActions();
        cc.tween(this.node)
            .stop()
            .then(cc.bezierBy(rmdTime, rmdBezier))
            .start();
    };
    /**
     * 碰撞检测
     * @param other 其他碰撞组件
     * @param self 当前碰撞组件
     */
    Fish.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        // 如果鱼已经死亡，则不再检测碰撞
        if (!this.isLive)
            return;
        var hurt = other.node.getComponent(Bullet_1.default).getHurt();
        this.hp -= hurt;
        if (this.hp <= 0) {
            this.isLive = false;
            // 停止移动
            this.node.stopAllActions();
            MyGlobal_1.default.GameManager.createCoinUp(this.node.getPosition(), this.fishType);
            MyGlobal_1.default.NumControl.setGoldNum(MyGlobal_1.default.hasGold += this.fishType.gold);
            this.anim.play('fishDead' + this.fishType.name);
            this.anim.on('finished', function (e) {
                Utils_1.default.putPoolNode(_this.node, MyGlobal_1.default.GameManager.fishPool);
                MyGlobal_1.default.GameManager.createGold(_this.node.getPosition());
            });
        }
    };
    Fish.prototype.update = function (dt) {
        var curPos = this.node.getPosition();
        // 如果两次位置的距离小于1，则不做任何操作
        if (curPos.sub(this.lastPos).mag() < 1)
            return;
        var x = curPos.x - this.lastPos.x;
        var y = curPos.y - this.lastPos.y;
        // const radian = Math.atan2(y, x)
        // this.node.angle = cc.misc.radiansToDegrees(radian) - 90;
        // console.log(Math.atan(y / x), radian)
        // Math.atan(y/ x) // 原始角度，所以要-90
        this.node.angle = cc.misc.radiansToDegrees(Math.atan(y / x)) - 90;
        this.lastPos = curPos;
        // if (this.node.x > (cc.winSize.width / 2 + 100)) this.node.destroy();
        // console.log(-cc.misc.radiansToDegrees(radian),cc.misc.radiansToDegrees(Math.atan(y/ x))-90)
        // this.node.angle = cc.misc.radiansToDegrees(Math.atan(y/ x))-90;
        var offsetWidth = this.node.width / 2 + 50;
        var offsetHeight = this.node.height / 2 + 50;
        // 超出边界移除
        if (this.node.x > (cc.winSize.width / 2 + offsetWidth) || (this.node.y > cc.winSize.height / 2 + offsetHeight) || (this.node.y < -cc.winSize.height / 2 - offsetHeight)) {
            Utils_1.default.putPoolNode(this.node, MyGlobal_1.default.GameManager.fishPool);
        }
    };
    Fish = __decorate([
        ccclass
    ], Fish);
    return Fish;
}(cc.Component));
exports.default = Fish;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL0Zpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQTZCO0FBQzdCLHdDQUFtQztBQUVuQyxtQ0FBOEI7QUFFeEIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQW1HQztRQWhHRyxTQUFTO1FBQ1QsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixRQUFRO1FBQ1IsUUFBRSxHQUFXLENBQUMsQ0FBQztRQUVmLE9BQU87UUFDUCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLE9BQU87UUFDUCxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUUxQixTQUFTO1FBQ1QsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFtRjlCLENBQUM7SUFqRkc7Ozs7O09BS0c7SUFDSSxtQkFBSSxHQUFYLFVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxRQUFrQjtRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDbEksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBVTtRQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN0QixZQUFZO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEUsSUFBTSxFQUFF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OUQ7SUFDTCxDQUFDO0lBakdnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0d4QjtJQUFELFdBQUM7Q0FsR0QsQUFrR0MsQ0FsR2lDLEVBQUUsQ0FBQyxTQUFTLEdBa0c3QztrQkFsR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1V0aWxzXCI7XG5pbXBvcnQgTXlHbG9iYWwgZnJvbSBcIi4uL015R2xvYmFsXCI7XG5pbXBvcnQge0Zpc2hUeXBlfSBmcm9tIFwiLi4vSW50ZXJmYWNlXCI7XG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL0J1bGxldFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8g5LiK5LiA5qyh55qE5L2N572uXG4gICAgbGFzdFBvczogY2MuVmVjMiA9IG51bGw7XG5cbiAgICAvLyDpsbznmoTnlJ/lkb3lgLxcbiAgICBocDogbnVtYmVyID0gMDtcblxuICAgIC8vIOmxvOeahOeKtuaAgVxuICAgIGlzTGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvLyDliqjnlLvnu4Tku7ZcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgLy8g6bG855qE57G75Z6L5bGe5oCnXG4gICAgZmlzaFR5cGU6IEZpc2hUeXBlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluiKgueCuVxuICAgICAqIEBwYXJhbSB4IHjovbTkvY3nva5cbiAgICAgKiBAcGFyYW0geSB56L205L2N572uXG4gICAgICogQHBhcmFtIGZpc2hUeXBlIOmxvOeahOexu+Wei1xuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCBmaXNoVHlwZTogRmlzaFR5cGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gTXlHbG9iYWwuR2FtZU1hbmFnZXIuZmlzaEF0bGFzLmdldFNwcml0ZUZyYW1lKFwiZmlzaE1vdmVfXCIgKyBmaXNoVHlwZS5uYW1lICsgXCJfMDFcIilcbiAgICAgICAgdGhpcy5maXNoVHlwZSA9IGZpc2hUeXBlO1xuICAgICAgICB0aGlzLmlzTGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIOWIneWni+WMlumxvOeahOihgOmHj1xuICAgICAgICB0aGlzLmhwID0gZmlzaFR5cGUuaHA7XG4gICAgICAgIC8vIOiuvue9rueisOaSnuebkuWtkOeahOWkp+Wwj1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBjb25zdCB2MjogY2MuVmVjMiA9IGNjLnYyKHgsIHkpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2Mik7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHYyO1xuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KCdmaXNoTW92ZScgKyBmaXNoVHlwZS5uYW1lKTtcbiAgICAgICAgLy8g6ZqP5py65ri45Yqo5pe26ZW/XG4gICAgICAgIGNvbnN0IHJtZFRpbWU6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAxMCArIDg7XG4gICAgICAgIC8vIOmaj+acuui0neWhnuWwlOabsue6v1xuICAgICAgICBjb25zdCBybWRCZXppZXI6IGNjLlZlYzJbXSA9IFV0aWxzLmJlemllckFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFV0aWxzLmJlemllckFycmF5Lmxlbmd0aCldO1xuICAgICAgICAvLyDlgZzmraLkuIrmrKHmraPlnKjov5DooYznmoTliqjkvZzliJfooahcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5zdG9wKClcbiAgICAgICAgICAgIC50aGVuKGNjLmJlemllckJ5KHJtZFRpbWUsIHJtZEJlemllcikpXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnorDmkp7mo4DmtYtcbiAgICAgKiBAcGFyYW0gb3RoZXIg5YW25LuW56Kw5pKe57uE5Lu2XG4gICAgICogQHBhcmFtIHNlbGYg5b2T5YmN56Kw5pKe57uE5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c6bG85bey57uP5q275Lqh77yM5YiZ5LiN5YaN5qOA5rWL56Kw5pKeXG4gICAgICAgIGlmICghdGhpcy5pc0xpdmUpIHJldHVybjtcbiAgICAgICAgY29uc3QgaHVydCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldCkuZ2V0SHVydCgpO1xuICAgICAgICB0aGlzLmhwIC09IGh1cnQ7XG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNMaXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyDlgZzmraLnp7vliqhcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgTXlHbG9iYWwuR2FtZU1hbmFnZXIuY3JlYXRlQ29pblVwKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCB0aGlzLmZpc2hUeXBlKTtcbiAgICAgICAgICAgIE15R2xvYmFsLk51bUNvbnRyb2wuc2V0R29sZE51bShNeUdsb2JhbC5oYXNHb2xkICs9IHRoaXMuZmlzaFR5cGUuZ29sZCk7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnZmlzaERlYWQnICsgdGhpcy5maXNoVHlwZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5vbignZmluaXNoZWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlscy5wdXRQb29sTm9kZSh0aGlzLm5vZGUsIE15R2xvYmFsLkdhbWVNYW5hZ2VyLmZpc2hQb29sKTtcbiAgICAgICAgICAgICAgICBNeUdsb2JhbC5HYW1lTWFuYWdlci5jcmVhdGVHb2xkKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VyUG9zOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIOWmguaenOS4pOasoeS9jee9rueahOi3neemu+Wwj+S6jjHvvIzliJnkuI3lgZrku7vkvZXmk43kvZxcbiAgICAgICAgaWYgKGN1clBvcy5zdWIodGhpcy5sYXN0UG9zKS5tYWcoKSA8IDEpIHJldHVybjtcbiAgICAgICAgY29uc3QgeCA9IGN1clBvcy54IC0gdGhpcy5sYXN0UG9zLng7XG4gICAgICAgIGNvbnN0IHkgPSBjdXJQb3MueSAtIHRoaXMubGFzdFBvcy55O1xuICAgICAgICAvLyBjb25zdCByYWRpYW4gPSBNYXRoLmF0YW4yKHksIHgpXG4gICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pIC0gOTA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coTWF0aC5hdGFuKHkgLyB4KSwgcmFkaWFuKVxuXG4gICAgICAgIC8vIE1hdGguYXRhbih5LyB4KSAvLyDljp/lp4vop5LluqbvvIzmiYDku6XopoEtOTBcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih5IC8geCkpIC0gOTA7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IGN1clBvcztcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS54ID4gKGNjLndpblNpemUud2lkdGggLyAyICsgMTAwKSkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coLWNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pLGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4oeS8geCkpLTkwKVxuICAgICAgICAvLyB0aGlzLm5vZGUuYW5nbGUgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHkvIHgpKS05MDtcblxuXG4gICAgICAgIGNvbnN0IG9mZnNldFdpZHRoOiBudW1iZXIgPSB0aGlzLm5vZGUud2lkdGggLyAyICsgNTA7XG4gICAgICAgIGNvbnN0IG9mZnNldEhlaWdodDogbnVtYmVyID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgKyA1MDtcbiAgICAgICAgLy8g6LaF5Ye66L6555WM56e76ZmkXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IChjYy53aW5TaXplLndpZHRoIC8gMiArIG9mZnNldFdpZHRoKSB8fCAodGhpcy5ub2RlLnkgPiBjYy53aW5TaXplLmhlaWdodCAvIDIgKyBvZmZzZXRIZWlnaHQpIHx8ICh0aGlzLm5vZGUueSA8IC1jYy53aW5TaXplLmhlaWdodCAvIDIgLSBvZmZzZXRIZWlnaHQpKSB7XG4gICAgICAgICAgICBVdGlscy5wdXRQb29sTm9kZSh0aGlzLm5vZGUsIE15R2xvYmFsLkdhbWVNYW5hZ2VyLmZpc2hQb29sKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19