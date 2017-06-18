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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var app_config_1 = require("../app.config");
var router_1 = require("@angular/router");
var user_model_1 = require("../models/user.model");
var jwt_service_1 = require("./jwt.service");
var user_service_1 = require("./user.service");
var AuthenticationService = (function () {
    function AuthenticationService(http, appConfig, jwtService, userService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.jwtService = jwtService;
        this.userService = userService;
        this.router = router;
        this.currentUserSubject = new Rx_1.BehaviorSubject(new user_model_1.User());
        this.currentUser = this.currentUserSubject.asObservable();
        this.isAuthenticatedSubject = new Rx_1.ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    AuthenticationService.prototype.checkAuth = function () {
        var _this = this;
        if (this.jwtService.getToken()) {
            this.userService.getUser().subscribe(function (data) {
                _this.setAuth(data.user);
            }, function (err) {
                _this.logout();
            });
        }
        else {
            this.logout();
        }
    };
    AuthenticationService.prototype.setAuth = function (user) {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        this.jwtService.setToken(user.token);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.appConfig.urlServer + "/auth/login", user)
            .map(function (res) {
            var data = res.json();
            _this.setAuth(data.user);
            return data.user;
        });
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    AuthenticationService.prototype.updateUser = function (data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Token ' + this.jwtService.getToken());
        return this.http.put(this.appConfig.urlServer + '/user/edit', { user: data }, { headers: headers })
            .map(function (res) {
            var resp = res.json();
            _this.currentUserSubject.next(resp.user);
            return resp.user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.jwtService.removeToken();
        this.currentUserSubject.next(new user_model_1.User());
        this.isAuthenticatedSubject.next(false);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            app_config_1.AppConfig,
            jwt_service_1.JwtService,
            user_service_1.UserService,
            router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map