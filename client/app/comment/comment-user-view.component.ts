import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: 'comment-user-view',
    templateUrl: 'comment-user-view.component.html'
})
export class CommentUserViewComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private commentService: CommentService,
                private slimLoadingBarService: SlimLoadingBarService) { }

    username: string;
    comments: Comment[];

    ngOnInit() {
        this.slimLoadingBarService.start();
        const parentActivatedRoute = this.route.parent;
        this.username = parentActivatedRoute.snapshot.params['username'];
        this.commentService.getCommentByUsername(this.username).subscribe(
            (data) => {
                this.slimLoadingBarService.complete();
                this.comments = data.comments;
            })
    }

}