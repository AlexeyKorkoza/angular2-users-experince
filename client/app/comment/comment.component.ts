import { Component, Input, OnInit } from "@angular/core";

import { Comment } from "../models/comment.model";
import { User } from "../models/user.model";

import { CommentService } from "../services/comment.service";
import { AuthenticationService } from "../services/authentication.service";

@Component({
    moduleId: module.id,
    selector: "comment",
    templateUrl: "comment.component.html"
})

export class CommentComponent implements OnInit{

    @Input() comments: Comment [];
    currentUser: User;

    constructor( private authenticationService: AuthenticationService,
                private commentService: CommentService) { }

    ngOnInit() {
        this.currentUser = this.authenticationService.getCurrentUser();
    }

    remove(id: string, index: number) {
        this.commentService.removeComment(id).subscribe();
        this.comments.splice(index, 1);
    }
}