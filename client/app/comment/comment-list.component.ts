import {Component, OnInit} from '@angular/core';

import {CommentService} from "./comment.service";
import {Comment} from "../models/comment.model";

@Component({
    selector: "comment-list",
    templateUrl: "app/comment/comment-list.component.html",
    styleUrls: ['../../style.css'],
    providers: [CommentService]
})

export class CommentListComponent implements OnInit {

    comments: Comment[];

    constructor(private commentService: CommentService) {
    }

    ngOnInit() {
        this.commentService.getComments().subscribe(
            (data) => {
                this.comments = data;
            });
    }
}