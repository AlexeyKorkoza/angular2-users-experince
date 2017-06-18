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
var user_model_1 = require("../models/user.model");
var user_service_1 = require("../services/user.service");
var authentication_service_1 = require("../services/authentication.service");
var ProfileStatsComponent = (function () {
    function ProfileStatsComponent(router, route, userService, authenticationService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.user = new user_model_1.User();
        this.flag = false;
    }
    ProfileStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.parent.params['username'];
        this.userService.getUserByUsername(username).subscribe(function (data) {
            Object.assign(_this.user, data.user);
        });
        this.authenticationService.currentUser.subscribe(function (data) {
            if (data.username == username) {
                _this.flag = true;
                _this.userNameProfile = data.username;
            }
        });
        this.userService.getUserStats(username).subscribe(function (data) {
            _this.user = data.user;
        });
    };
    ProfileStatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "profile-stats",
            templateUrl: "profile-stats.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            user_service_1.UserService,
            authentication_service_1.AuthenticationService])
    ], ProfileStatsComponent);
    return ProfileStatsComponent;
}());
exports.ProfileStatsComponent = ProfileStatsComponent;
//# sourceMappingURL=profile-stats.component.js.map