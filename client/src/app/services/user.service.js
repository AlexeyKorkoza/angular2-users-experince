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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var app_config_1 = require("../app.config");
var jwt_service_1 = require("./jwt.service");
var UserService = (function () {
    function UserService(http, appConfig, jwtService) {
        this.http = http;
        this.appConfig = appConfig;
        this.jwtService = jwtService;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.appConfig.urlServer + "/user/register", user)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getUser = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Token ' + this.jwtService.getToken());
        return this.http.get(this.appConfig.urlServer + "/user", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserByUsername = function (username) {
        return this.http.get(this.appConfig.urlServer + '/user/edit', { params: { username: username } })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserStats = function (username) {
        return this.http.get(this.appConfig.urlServer + '/user/stats', { params: { username: username } })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getLastFiveUser = function () {
        return this.http.get(this.appConfig.urlServer + '/user/last')
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            app_config_1.AppConfig,
            jwt_service_1.JwtService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map