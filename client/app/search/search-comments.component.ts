import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: 'search-component',
    templateUrl: 'search-comments.component.html',
    styleUrls: ['search-comments.component.css']
})

export class SearchCommentsComponent implements OnInit {
    constructor(private commentService: CommentService,
                private slimLoadingBarService: SlimLoadingBarService) { }

    comments: Comment[];
    comment: Comment = new Comment();
    message: string = "";
    authors: any;

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
            (data) => {
                this.slimLoadingBarService.complete();
                if (data.comments) {
                    this.comments = data.comments;
                } else {
                    this.message = data;
                }

            })
    }

}