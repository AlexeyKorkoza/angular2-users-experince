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
var comment_model_1 = require("../models/comment.model");
var comment_service_1 = require("../services/comment.service");
var SearchCommentsComponent = (function () {
    function SearchCommentsComponent(commentService, slimLoadingBarService) {
        this.commentService = commentService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.comment = new comment_model_1.Comment();
        this.message = "";
    }
    SearchCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getAuthors().subscribe(function (data) {
            _this.authors = data;
        });
    };
    SearchCommentsComponent.prototype.search = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.message = "";
        if (this.comments) {
            this.comments.splice(0, this.comments.length);
        }
        this.commentService.search(this.comment).subscribe(function (data) {
            _this.slimLoadingBarService.complete();
            if (data.comments) {
                _this.comments = data.comments;
            }
            else {
                _this.message = data;
            }
        });
    };
    SearchCommentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-component',
            templateUrl: 'search-comments.component.html',
            styleUrls: ['search-comments.component.css']
        }),
        __metadata("design:paramtypes", [comment_service_1.CommentService,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], SearchCommentsComponent);
    return SearchCommentsComponent;
}());
exports.SearchCommentsComponent = SearchCommentsComponent;
//# sourceMappingURL=search-comments.component.js.map