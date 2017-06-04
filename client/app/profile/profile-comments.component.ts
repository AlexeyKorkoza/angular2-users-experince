import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { CommentService } from "../services/comment.service";
import { AuthenticationService } from "../services/authentication.service";

import { Comment } from "../models/comment.model";
import { User } from "../models/user.model";

@Component({
    moduleId: module.id,
    selector: 'user-list-comments',
    templateUrl: 'profile-comments.component.html'
})

export class ProfileCommentsComponent implements OnInit {

    comments: Comment[];
    currentUser: User;
    username: string;

    constructor(private commentService: CommentService,
                private authenticationService: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() { 
        const parentActivatedRoute = this.route.parent;
        this.username = parentActivatedRoute.snapshot.params['username'];
        this.commentService.getCommentByUsername(this.username).subscribe(
              (data) => {
                  this.comments = data.comments;
              })
         }
}