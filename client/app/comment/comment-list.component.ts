import { Component, OnInit } from '@angular/core';

import { CommentService } from "../services/comment.service";
import { Comment } from "../models/comment.model";

@Component({
    moduleId: module.id,
    selector: "comment-list",
    templateUrl: "comment-list.component.html"
})

export class CommentListComponent implements OnInit {

    comments: Comment [];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getComments().subscribe(
            (data) => {
                this.comments = data;
            });
    }
}