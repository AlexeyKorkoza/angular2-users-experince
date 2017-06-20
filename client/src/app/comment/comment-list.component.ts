import { Component, OnInit } from '@angular/core';

import { CommentService } from "../shared/services/comment.service";
import { Comment } from "../shared/models/comment.model";

@Component({
    selector: "comment-list",
    templateUrl: "./comment-list.component.html"
})

export class CommentListComponent implements OnInit {

    comments: Comment [];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getComments().subscribe(
            data => {
                this.comments = data.comments;
            });
    }
}