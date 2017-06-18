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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var authentication_service_1 = require("../services/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, formBuilder, router, route, slimLoadingBarService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.slimLoadingBarService = slimLoadingBarService;
        this.message = "";
        this.loginForm = formBuilder.group({
            "username": [null, forms_1.Validators.required],
            "password": [null, forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function (value) {
        var _this = this;
        this.slimLoadingBarService.start();
        this.authenticationService.login(value).subscribe(function () {
            _this.slimLoadingBarService.complete();
            _this.router.navigate(['']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "login",
            templateUrl: "login.component.html"
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            forms_1.FormBuilder,
            router_1.Router,
            router_1.ActivatedRoute,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map