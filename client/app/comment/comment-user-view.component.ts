import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: 'comment-user-view',
    templateUrl: 'comment-user-view.component.html'
})
export class CommentUserViewComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private commentService: CommentService) { }

    username: string;
    comments: Comment[];

    ngOnInit() {
        const parentActivatedRoute = this.route.parent;
        this.username = parentActivatedRoute.snapshot.params['username'];
        this.commentService.getCommentByUsername(this.username).subscribe(
            (data) => {
                this.comments = data.comments;
            })
    }

}