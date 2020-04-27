"use strict";
cc._RF.push(module, 'b6f73jScf9KFoWkOBfl4L0w', 'StartBtn');
// scripts/startGame/StartBtn.ts

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
var axios_1 = require("axios");
var config_1 = require("../config/config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartBtn = /** @class */ (function (_super) {
    __extends(StartBtn, _super);
    function StartBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        _this.password = null;
        return _this;
    }
    StartBtn.prototype.onLoad = function () {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
    };
    StartBtn.prototype.onClick = function () {
        // cc.director.loadScene('mainGame');
        console.log(111);
        console.log(this.username.string);
        console.log(this.password.string);
        // axios.get('http://127.0.0.1:8080/login', {
        //     params: {
        //         username: 'aaa',
        //         password: 123
        //     }
        // }).then(res => {
        //     console.log(res);
        // })
        axios_1.default.post(config_1.config.reqUrl + '/login', {
            username: this.username.string,
            password: this.password.string
        }).then(function (res) {
            console.log(res);
            if (res.data.errcode === 0) {
                cc.director.loadScene('mainGame');
            }
        });
    };
    __decorate([
        property(cc.EditBox)
    ], StartBtn.prototype, "username", void 0);
    __decorate([
        property(cc.EditBox)
    ], StartBtn.prototype, "password", void 0);
    StartBtn = __decorate([
        ccclass
    ], StartBtn);
    return StartBtn;
}(cc.Component));
exports.default = StartBtn;

cc._RF.pop();