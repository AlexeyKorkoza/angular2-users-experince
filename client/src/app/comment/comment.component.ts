import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';

import {Comment} from "../models/comment.model";

import {AuthenticationService} from "../services/authentication.service";
import {CommentService} from "../services/comment.service";

@Component({
    selector: "comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.css"]
})

export class CommentComponent implements OnInit {

    @Input() comments: Comment [];
    flag: boolean = false;
    username: string;
    isAuthenticated: any;
    url: any;

    constructor(private commentService: CommentService,
                private authenticationService: AuthenticationService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.username = this.route.snapshot.params['username'];
        if (this.username) {
            this.flag = true;
        }
        this.authenticationService.isAuthenticated.subscribe(
            (authenticated) => {
                this.isAuthenticated = authenticated;
            }
        )
    }

    remove(id: string, index: number) {
        this.commentService.removeComment(id).subscribe();
        this.comments.splice(index, 1);
    }

    view(index: Number) {
        if (this.isAuthenticated) {
            let author = "";

            this.comments.forEach(function (item, i) {
                if (index == i) {
                    author = item.author;
                }
            });
            this.router.navigateByUrl('/user/' + author);
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}