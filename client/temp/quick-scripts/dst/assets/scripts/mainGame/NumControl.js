
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainGame/NumControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7365d5GfVNII6k6DN+UcXuK', 'NumControl');
// scripts/mainGame/NumControl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NumControl = /** @class */ (function (_super) {
    __extends(NumControl, _super);
    function NumControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numAtlas = null;
        return _this;
    }
    NumControl.prototype.start = function () {
        MyGlobal_1.default.NumControl = this;
        this.setGoldNum(MyGlobal_1.default.hasGold);
    };
    NumControl.prototype.setGoldNum = function (val) {
        var count = val.toString().padStart(6, '0');
        for (var i = 0; i < 6; i++) {
            this.node.children[i].getComponent(cc.Sprite).spriteFrame = this.numAtlas.getSpriteFrame(count[i]);
        }
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], NumControl.prototype, "numAtlas", void 0);
    NumControl = __decorate([
        ccclass
    ], NumControl);
    return NumControl;
}(cc.Component));
exports.default = NumControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21haW5HYW1lL051bUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBRTdCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFpQkM7UUFiRyxjQUFRLEdBQW1CLElBQUksQ0FBQzs7SUFhcEMsQ0FBQztJQVhhLDBCQUFLLEdBQWY7UUFDSSxrQkFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixHQUFHO1FBQ2pCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEc7SUFDTCxDQUFDO0lBWkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDTztJQUhmLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnQjlCO0lBQUQsaUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQnVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0JuRDtrQkFoQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlHbG9iYWwgZnJvbSBcIi4uL015R2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgbnVtQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgTXlHbG9iYWwuTnVtQ29udHJvbCA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2V0R29sZE51bShNeUdsb2JhbC5oYXNHb2xkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0R29sZE51bSh2YWwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY291bnQgPSB2YWwudG9TdHJpbmcoKS5wYWRTdGFydCg2LCAnMCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5udW1BdGxhcy5nZXRTcHJpdGVGcmFtZShjb3VudFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=