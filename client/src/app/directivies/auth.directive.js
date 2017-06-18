"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var ShowAuthedDirective = (function () {
    function ShowAuthedDirective(templateRef, authenticationService, viewContainer) {
        this.templateRef = templateRef;
        this.authenticationService = authenticationService;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(ShowAuthedDirective.prototype, "showAuthed", {
        set: function (condition) {
            var _this = this;
            this.authenticationService.isAuthenticated.subscribe(function (isAuthenticated) {
                _this.isAuthenticated = isAuthenticated;
                if (!condition && !_this.isAuthenticated || condition && _this.isAuthenticated) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                    $(".ng2-dropdown-container").css("margin-top", "10px");
                    $(".ng2-dropdown-button[_ngcontent-c3]").css({
                        "background": "#66ff66",
                        "color": "#fff",
                        "font-family": "'Source Sans Pro', sans-serif",
                        "font-size": "14pt",
                        "min-width": "0px",
                        "max-width": "none"
                    });
                    $(".ng2-dropdown-button[_ngcontent-c3]").css("border-bottom", "0px");
                    $(".ng2-dropdown-button__label[_ngcontent-c3]").css({
                        "-webkit-box-flex": "initial",
                        "flex": "initial",
                        "-ms-flex": "initial"
                    });
                    if ($("html").width() < 600) {
                    }
                }
                else {
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "showAuthed", null);
    ShowAuthedDirective = __decorate([
        core_1.Directive({
            selector: '[showAuthed]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            authentication_service_1.AuthenticationService,
            core_1.ViewContainerRef])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());
exports.ShowAuthedDirective = ShowAuthedDirective;
//# sourceMappingURL=auth.directive.js.map