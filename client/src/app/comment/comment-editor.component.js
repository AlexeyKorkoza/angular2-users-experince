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
var comment_model_1 = require("../models/comment.model");
var comment_service_1 = require("../services/comment.service");
var CommentEditorComponent = (function () {
    function CommentEditorComponent(commentService, formBuilder, router, slimLoadingBarService) {
        this.commentService = commentService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
        this.comment = new comment_model_1.Comment();
        this.editorForm = formBuilder.group({
            "title": [null, forms_1.Validators.required],
            "text": [null, forms_1.Validators.required]
        });
        this.url = router.url.split('/');
    }
    CommentEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        if (this.url.length === 5) {
            this.text = "Edit";
            this.textButton = "Update";
            var id = this.url[this.url.length - 1];
            this.commentService.getCommentById(id).subscribe(function (data) {
                Object.assign(_this.comment, data.comment);
                _this.editorForm.patchValue(_this.comment);
            });
        }
        else {
            this.text = "Create new";
            this.textButton = "Create";
        }
        this.slimLoadingBarService.complete();
    };
    CommentEditorComponent.prototype.save = function (model) {
        this.slimLoadingBarService.start();
        Object.assign(this.comment, model);
        this.commentService.saveComment(this.comment).subscribe();
        this.slimLoadingBarService.complete();
        this.router.navigateByUrl('/comments/' + this.url[2]);
    };
    CommentEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "comment-editor",
            templateUrl: "comment-editor.component.html",
            styleUrls: ["comment-editor.component.css"]
        }),
        __metadata("design:paramtypes", [comment_service_1.CommentService,
            forms_1.FormBuilder,
            router_1.Router,
            ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], CommentEditorComponent);
    return CommentEditorComponent;
}());
exports.CommentEditorComponent = CommentEditorComponent;
//# sourceMappingURL=comment-editor.component.js.map