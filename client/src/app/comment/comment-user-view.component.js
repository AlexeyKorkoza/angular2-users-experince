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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var comment_service_1 = require("../services/comment.service");
var CommentUserViewComponent = (function () {
    function CommentUserViewComponent(route, commentService, slimLoadingBarService) {
        this.route = route;
        this.commentService = commentService;
        this.slimLoadingBarService = slimLoadingBarService;
    }
    CommentUserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        var parentActivatedRoute = this.route.parent;
        this.username = parentActivatedRoute.snapshot.params['username'];
        this.commentService.getCommentByUsername(this.username).subscribe(function (data) {
            _this.slimLoadingBarService.complete();
            _this.comments = data.comments;
        });
    };
    CommentUserViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment-user-view',
            templateUrl: 'comment-user-view.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            comment_service_1.CommentService,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], CommentUserViewComponent);
    return CommentUserViewComponent;
}());
exports.CommentUserViewComponent = CommentUserViewComponent;
//# sourceMappingURL=comment-user-view.component.js.map