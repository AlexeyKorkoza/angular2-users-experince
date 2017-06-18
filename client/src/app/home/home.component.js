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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var authentication_service_1 = require("../services/authentication.service");
var HomeComponent = (function () {
    function HomeComponent(userService, router, authenticationService, slimLoadingBarService) {
        this.userService = userService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.slimLoadingBarService = slimLoadingBarService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.userService.getLastFiveUser().subscribe(function (data) {
            _this.users = data.users;
            _this.slimLoadingBarService.complete();
        });
        this.authenticationService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
        });
    };
    HomeComponent.prototype.viewProfile = function (index) {
        if (this.isAuthenticated) {
            var username_1;
            this.users.forEach(function (item, i) {
                if (index == i) {
                    username_1 = item.username;
                }
            });
            this.router.navigateByUrl('/user/' + username_1);
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ["home.component.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            authentication_service_1.AuthenticationService,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map