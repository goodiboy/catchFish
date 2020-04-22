"use strict";
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