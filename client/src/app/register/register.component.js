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
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var forms_1 = require("@angular/forms");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var RegisterComponent = (function () {
    function RegisterComponent(userService, router, formBuilder, slimLoadingBarService) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.slimLoadingBarService = slimLoadingBarService;
        this.model = {};
        this.message = "";
        this.password_check = "";
        this.registerForm = formBuilder.group({
            'username': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirm_password': [null, forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.register = function (value) {
        var _this = this;
        this.slimLoadingBarService.start();
        this.message = "";
        this.password_check = "";
        if (value.password != value.confirm_password) {
            this.password_check = "Пароли не совпадают";
        }
        else {
            var date = new Date();
            var current_date = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            value.time = time;
            value.date = current_date;
            this.userService.create(value).subscribe(function () {
                _this.router.navigate(['/']);
            });
        }
        this.slimLoadingBarService.complete();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "register",
            templateUrl: "register.component.html"
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            forms_1.FormBuilder,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map