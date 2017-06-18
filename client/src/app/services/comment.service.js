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
require("rxjs/add/operator/map");
var app_config_1 = require("../app.config");
var CommentService = (function () {
    function CommentService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    CommentService.prototype.getComments = function () {
        return this.http.get(this.appConfig.urlServer + "/comment")
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.getCommentByUsername = function (username) {
        return this.http.get(this.appConfig.urlServer + '/comment/username', { params: { username: username } })
            .map(function (response) { return response.json(); });
    };
    CommentService.prototype.getCommentById = function (id) {
        return this.http.get(this.appConfig.urlServer + '/comment/edit/' + id, { params: { id: id } })
            .map(function (response) { return response.json(); });
    };
    CommentService.prototype.getAuthors = function () {
        return this.http.get(this.appConfig.urlServer + "/comment/authors")
            .map(function (response) {
            var data = response.json();
            var authors = [];
            for (var index in data.authors) {
                authors.push(data.authors[index].author);
            }
            return authors;
        });
    };
    CommentService.prototype.saveComment = function (comment) {
        if (comment._id) {
            return this.http.put(this.appConfig.urlServer + "/comment/edit/" + comment._id, { comment: comment })
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.post(this.appConfig.urlServer + "/comment/create", { comment: comment })
                .map(function (response) { return response.json(); });
        }
    };
    CommentService.prototype.search = function (comment) {
        return this.http.post(this.appConfig.urlServer + "/comment/search", { comment: comment })
            .map(function (response) { return response.json(); });
    };
    CommentService.prototype.removeComment = function (id) {
        return this.http.delete(this.appConfig.urlServer + "/comment/" + id, { params: { id: id } });
    };
    CommentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map