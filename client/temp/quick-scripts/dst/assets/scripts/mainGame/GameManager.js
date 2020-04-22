
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afdafeAiPVF0J4OOq4hUzaR', 'GameManager');
// scripts/mainGame/GameManager.ts

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
var Fish_1 = require("./Fish");
var Interface_1 = require("../Interface");
var Utils_1 = require("../Utils");
var Bullet_1 = require("./Bullet");
var MyGlobal_1 = require("../MyGlobal");
var CoinUp_1 = require("./CoinUp");
var Gold_1 = require("./Gold");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 鱼的预制体
        _this.fishPrefab = null;
        // 炮弹预制体
        _this.bulletPrefab = null;
        // 分值的预制体
        _this.coinUpPrefab = null;
        // 鱼网预制体
        _this.netPrefab = null;
        //炮弹图集
        _this.weaponAtlas = null;
        // 鱼游动的层
        _this.fishLayer = null;
        // 炮台节点
        _this.weapon = null;
        // 鱼的图集
        _this.fishAtlas = null;
        // 金币的预制体
        _this.goldPrefab = null;
        // 当前拥有多少金币
        _this.numControlNode = null;
        // 鱼的对象池
        _this.fishPool = new cc.NodePool();
        // 炮弹的对象池
        _this.bulletPool = new cc.NodePool();
        // 鱼网的对象池
        _this.netPool = new cc.NodePool();
        // 分数的对象池
        _this.coinUpPool = new cc.NodePool();
        // 金币对象池
        _this.goldPool = new cc.NodePool();
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        // 初始化数据
        MyGlobal_1.default.init();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // 把当前管理类放到全局的
        MyGlobal_1.default.GameManager = this;
        this.createFish();
        this.schedule(this.createFish, 2);
        // 监听触摸层传过来的时间，附带角度
        cc.director.on(Interface_1.MyEvent.TOUCHEND_SHOOT, this.fireBullet, this);
    };
    /**
     * 发射炮弹
     * @param angle 炮弹的角度
     */
    GameManager.prototype.fireBullet = function (angle) {
        MyGlobal_1.default.NumControl.setGoldNum(MyGlobal_1.default.hasGold -= MyGlobal_1.default.weaponLevel);
        var bullet = Utils_1.default.getPoolNode(this.bulletPool, this.bulletPrefab);
        bullet.parent = this.fishLayer;
        bullet.getComponent(Bullet_1.default).init(angle);
    };
    // 创建鱼
    GameManager.prototype.createFish = function () {
        var fishCount = 5;
        var fishNode = null;
        for (var i = 0; i < fishCount; i++) {
            fishNode = Utils_1.default.getPoolNode(this.fishPool, this.fishPrefab);
            fishNode.parent = this.fishLayer;
            var x = -Math.random() * 150 - this.node.width / 2 - 100;
            var y = Math.random() * 500 - 250;
            var fishType = Utils_1.default.fishType[Math.floor(Math.random() * Utils_1.default.fishType.length)];
            fishNode.getComponent(Fish_1.default).init(x, y, fishType);
        }
    };
    // 创建获得的分数值
    GameManager.prototype.createCoinUp = function (pos, fishType) {
        var coinUp = Utils_1.default.getPoolNode(this.coinUpPool, this.coinUpPrefab);
        coinUp.parent = this.fishLayer;
        coinUp.getComponent(CoinUp_1.default).init(pos, fishType);
    };
    // 创建金币
    GameManager.prototype.createGold = function (pos) {
        var gold = Utils_1.default.getPoolNode(this.goldPool, this.goldPrefab);
        gold.parent = this.fishLayer;
        gold.getComponent(Gold_1.default).init(pos, cc.v2(-300, -270));
    };
    GameManager.prototype.testGameOver = function () {
        if (Utils_1.default.testGameOver()) {
            this.scheduleOnce(function (e) {
                // this.GameOverNode.active = true;
                cc.director.loadScene('gameOver');
            }, 0.5);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "fishPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "coinUpPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "netPrefab", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], GameManager.prototype, "weaponAtlas", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fishLayer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "weapon", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], GameManager.prototype, "fishAtlas", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "goldPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "numControlNode", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQiwwQ0FBK0M7QUFDL0Msa0NBQTZCO0FBQzdCLG1DQUE4QjtBQUM5Qix3Q0FBbUM7QUFDbkMsbUNBQThCO0FBQzlCLCtCQUEwQjtBQUVwQixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBK0hDO1FBNUhHLFFBQVE7UUFFUixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixRQUFRO1FBRVIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsU0FBUztRQUVULGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFFBQVE7UUFFUixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLE1BQU07UUFFTixpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsUUFBUTtRQUVSLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsT0FBTztRQUVQLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsT0FBTztRQUVQLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLFNBQVM7UUFFVCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixXQUFXO1FBRVgsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsUUFBUTtRQUNELGNBQVEsR0FBZ0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakQsU0FBUztRQUNGLGdCQUFVLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRW5ELFNBQVM7UUFDRixhQUFPLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhELFNBQVM7UUFDRixnQkFBVSxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVu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bURBQ1M7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYTtJQXhDZCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEgvQjtJQUFELGtCQUFDO0NBOUhELEFBOEhDLENBOUh3QyxFQUFFLENBQUMsU0FBUyxHQThIcEQ7a0JBOUhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpc2ggZnJvbSBcIi4vRmlzaFwiO1xuaW1wb3J0IHtNeUV2ZW50LCBGaXNoVHlwZX0gZnJvbSBcIi4uL0ludGVyZmFjZVwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9VdGlsc1wiO1xuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9CdWxsZXRcIjtcbmltcG9ydCBNeUdsb2JhbCBmcm9tIFwiLi4vTXlHbG9iYWxcIjtcbmltcG9ydCBDb2luVXAgZnJvbSBcIi4vQ29pblVwXCI7XG5pbXBvcnQgR29sZCBmcm9tIFwiLi9Hb2xkXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8g6bG855qE6aKE5Yi25L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBmaXNoUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8g54Ku5by56aKE5Yi25L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyDliIblgLznmoTpooTliLbkvZNcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNvaW5VcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIOmxvOe9kemihOWItuS9k1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbmV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy/ngq7lvLnlm77pm4ZcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgd2VhcG9uQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIC8vIOmxvOa4uOWKqOeahOWxglxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpc2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDngq7lj7DoioLngrlcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3ZWFwb246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8g6bG855qE5Zu+6ZuGXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIGZpc2hBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuXG4gICAgLy8g6YeR5biB55qE6aKE5Yi25L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnb2xkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8g5b2T5YmN5oul5pyJ5aSa5bCR6YeR5biBXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbnVtQ29udHJvbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICAvLyDpsbznmoTlr7nosaHmsaBcbiAgICBwdWJsaWMgZmlzaFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG5cbiAgICAvLyDngq7lvLnnmoTlr7nosaHmsaBcbiAgICBwdWJsaWMgYnVsbGV0UG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcblxuICAgIC8vIOmxvOe9keeahOWvueixoeaxoFxuICAgIHB1YmxpYyBuZXRQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuXG4gICAgLy8g5YiG5pWw55qE5a+56LGh5rGgXG4gICAgcHVibGljIGNvaW5VcFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG5cbiAgICAvLyDph5HluIHlr7nosaHmsaBcbiAgICBwdWJsaWMgZ29sZFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKClcblxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5pWw5o2uXG4gICAgICAgIE15R2xvYmFsLmluaXQoKTtcblxuICAgICAgICBjb25zdCBtYW5hZ2VyOiBjYy5Db2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuXG4gICAgICAgIC8vIOaKiuW9k+WJjeeuoeeQhuexu+aUvuWIsOWFqOWxgOeahFxuICAgICAgICBNeUdsb2JhbC5HYW1lTWFuYWdlciA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVGaXNoKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jcmVhdGVGaXNoLCAyKTtcblxuICAgICAgICAvLyDnm5HlkKzop6bmkbjlsYLkvKDov4fmnaXnmoTml7bpl7TvvIzpmYTluKbop5LluqZcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oTXlFdmVudC5UT1VDSEVORF9TSE9PVCwgdGhpcy5maXJlQnVsbGV0LCB0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOWPkeWwhOeCruW8uVxuICAgICAqIEBwYXJhbSBhbmdsZSDngq7lvLnnmoTop5LluqZcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyZUJ1bGxldChhbmdsZSk6IHZvaWQge1xuICAgICAgICBNeUdsb2JhbC5OdW1Db250cm9sLnNldEdvbGROdW0oTXlHbG9iYWwuaGFzR29sZCAtPSBNeUdsb2JhbC53ZWFwb25MZXZlbCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldDogY2MuTm9kZSA9IFV0aWxzLmdldFBvb2xOb2RlKHRoaXMuYnVsbGV0UG9vbCwgdGhpcy5idWxsZXRQcmVmYWIpO1xuICAgICAgICBidWxsZXQucGFyZW50ID0gdGhpcy5maXNoTGF5ZXI7XG4gICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KS5pbml0KGFuZ2xlKTtcbiAgICB9XG5cbiAgICAvLyDliJvlu7rpsbxcbiAgICBwdWJsaWMgY3JlYXRlRmlzaCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGZpc2hDb3VudDogbnVtYmVyID0gNTtcbiAgICAgICAgbGV0IGZpc2hOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXNoQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgZmlzaE5vZGUgPSBVdGlscy5nZXRQb29sTm9kZSh0aGlzLmZpc2hQb29sLCB0aGlzLmZpc2hQcmVmYWIpO1xuICAgICAgICAgICAgZmlzaE5vZGUucGFyZW50ID0gdGhpcy5maXNoTGF5ZXI7XG4gICAgICAgICAgICBjb25zdCB4ID0gLU1hdGgucmFuZG9tKCkgKiAxNTAgLSB0aGlzLm5vZGUud2lkdGggLyAyIC0gMTAwO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiA1MDAgLSAyNTA7XG4gICAgICAgICAgICBjb25zdCBmaXNoVHlwZSA9IFV0aWxzLmZpc2hUeXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFV0aWxzLmZpc2hUeXBlLmxlbmd0aCldO1xuICAgICAgICAgICAgZmlzaE5vZGUuZ2V0Q29tcG9uZW50KEZpc2gpLmluaXQoeCwgeSwgZmlzaFR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yib5bu66I635b6X55qE5YiG5pWw5YC8XG4gICAgcHVibGljIGNyZWF0ZUNvaW5VcChwb3M6IGNjLlZlYzIsIGZpc2hUeXBlOiBGaXNoVHlwZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb2luVXA6IGNjLk5vZGUgPSBVdGlscy5nZXRQb29sTm9kZSh0aGlzLmNvaW5VcFBvb2wsIHRoaXMuY29pblVwUHJlZmFiKTtcbiAgICAgICAgY29pblVwLnBhcmVudCA9IHRoaXMuZmlzaExheWVyO1xuICAgICAgICBjb2luVXAuZ2V0Q29tcG9uZW50KENvaW5VcCkuaW5pdChwb3MsIGZpc2hUeXBlKTtcbiAgICB9XG5cbiAgICAvLyDliJvlu7rph5HluIFcbiAgICBwdWJsaWMgY3JlYXRlR29sZChwb3M6IGNjLlZlYzIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ29sZDogY2MuTm9kZSA9IFV0aWxzLmdldFBvb2xOb2RlKHRoaXMuZ29sZFBvb2wsIHRoaXMuZ29sZFByZWZhYik7XG4gICAgICAgIGdvbGQucGFyZW50ID0gdGhpcy5maXNoTGF5ZXI7XG4gICAgICAgIGdvbGQuZ2V0Q29tcG9uZW50KEdvbGQpLmluaXQocG9zLGNjLnYyKC0zMDAsLTI3MCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXN0R2FtZU92ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy50ZXN0R2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HYW1lT3Zlck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWVPdmVyJyk7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=