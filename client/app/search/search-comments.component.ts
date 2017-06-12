import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: 'search-component',
    templateUrl: 'search-comments.component.html',
    styleUrls: ['search-comments.component.css']
})

export class SearchCommentsComponent implements OnInit {
    constructor(private commentService: CommentService) { }

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
        this.message = "";
        if (this.comments) {
            this.comments.splice(0, this.comments.length);
        }
        this.commentService.search(this.comment).subscribe(
            (data) => {
                if (data.comments) {
                    this.comments = data.comments;
                }

                if (data.not_found) {
                    this.message = data.not_found;
                }

            })
    }

}