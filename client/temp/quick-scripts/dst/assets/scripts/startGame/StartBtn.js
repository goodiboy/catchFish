
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/startGame/StartBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YXJ0R2FtZS9TdGFydEJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIsMkNBQXVDO0FBRWpDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUF1Q0M7UUFuQ0csY0FBUSxHQUFlLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQWUsSUFBSSxDQUFDOztJQWdDaEMsQ0FBQztJQTlCYSx5QkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUNJLHFDQUFxQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFakMsNkNBQTZDO1FBQzdDLGdCQUFnQjtRQUNoQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLFFBQVE7UUFDUixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLEtBQUs7UUFFTCxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtTQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ087SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQU5YLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQzVCO0lBQUQsZUFBQztDQXRDRCxBQXNDQyxDQXRDcUMsRUFBRSxDQUFDLFNBQVMsR0FzQ2pEO2tCQXRDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICB1c2VybmFtZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwYXNzd29yZDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy52aWV3LnNldE9yaWVudGF0aW9uKGNjLm1hY3JvLk9SSUVOVEFUSU9OX0xBTkRTQ0FQRSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluR2FtZScpO1xuICAgICAgICBjb25zb2xlLmxvZygxMTEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcm5hbWUuc3RyaW5nKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhc3N3b3JkLnN0cmluZylcblxuICAgICAgICAvLyBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9sb2dpbicsIHtcbiAgICAgICAgLy8gICAgIHBhcmFtczoge1xuICAgICAgICAvLyAgICAgICAgIHVzZXJuYW1lOiAnYWFhJyxcbiAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDogMTIzXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgYXhpb3MucG9zdChjb25maWcucmVxVXJsICsgJy9sb2dpbicsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLnN0cmluZyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLnN0cmluZ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycmNvZGUgPT09IDApe1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbkdhbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=