import { Component, Input, OnInit } from "@angular/core";

import { Comment } from "../models/comment.model";
import { User } from "../models/user.model";

import { AuthenticationService } from "../services/authentication.service";

@Component({
    moduleId: module.id,
    selector: "comment",
    templateUrl: "comment.component.html"
})

export class CommentComponent implements OnInit{

    @Input() comments: Comment [];
    currentUser: User;

    constructor( private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.currentUser = this.authenticationService.getCurrentUser();
        console.log(this.currentUser);
    }
}