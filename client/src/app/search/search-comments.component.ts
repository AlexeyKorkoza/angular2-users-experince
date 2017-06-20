import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Comment } from "../shared/models/comment.model";
import { CommentService } from "../shared/services/comment.service";

@Component({
    selector: 'search-component',
    templateUrl: './search-comments.component.html',
    styleUrls: ['./search-comments.component.scss']
})

export class SearchCommentsComponent implements OnInit {

    comments: Comment[];
    comment: Comment = new Comment();
    message: string = "";
    authors: any;

    constructor(
        private commentService: CommentService,
        private slimLoadingBarService: SlimLoadingBarService) {}

    ngOnInit() {
        this.commentService.getAuthors().subscribe(
            (data) => {
                this.authors = data;
            }
        )
    }

    search() {
        this.slimLoadingBarService.start();
        this.message = "";
        if (this.comments) {
            this.comments.splice(0, this.comments.length);
        }
        this.commentService.search(this.comment).subscribe(
            data => {
                this.slimLoadingBarService.complete();
                if (data.comments) {
                    this.comments = data.comments;
                } else {
                    this.message = data;
                }

            })
    }

}