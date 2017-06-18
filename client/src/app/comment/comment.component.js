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
var authentication_service_1 = require("../services/authentication.service");
var comment_service_1 = require("../services/comment.service");
var CommentComponent = (function () {
    function CommentComponent(commentService, authenticationService, router, route) {
        this.commentService = commentService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.flag = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.route.snapshot.params['username'];
        if (this.username) {
            this.flag = true;
        }
        this.authenticationService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
        });
    };
    CommentComponent.prototype.remove = function (id, index) {
        this.commentService.removeComment(id).subscribe();
        this.comments.splice(index, 1);
    };
    CommentComponent.prototype.view = function (index) {
        if (this.isAuthenticated) {
            var author_1 = "";
            this.comments.forEach(function (item, i) {
                if (index == i) {
                    author_1 = item.author;
                }
            });
            this.router.navigateByUrl('/user/' + author_1);
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CommentComponent.prototype, "comments", void 0);
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "comment",
            templateUrl: "comment.component.html",
            styleUrls: ["comment.component.css"]
        }),
        __metadata("design:paramtypes", [comment_service_1.CommentService,
            authentication_service_1.AuthenticationService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map