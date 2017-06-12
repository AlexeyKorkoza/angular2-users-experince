import {Component, Input, OnInit} from "@angular/core";
import {Router} from '@angular/router';

import {Comment} from "../models/comment.model";

import {CommentService} from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: "comment",
    templateUrl: "comment.component.html"
})

export class CommentComponent implements OnInit {

    @Input() comments: Comment [];
    flag: boolean = false;
    username: string;
    url: any;

    constructor(private commentService: CommentService,
                private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((url: any) => {
            this.url = url.url.split('/');
            if (this.url.length == 3) {
                this.username = this.url[2];
                this.flag = true;
            }
        });
    }

    remove(id: string, index: number) {
        this.commentService.removeComment(id).subscribe();
        this.comments.splice(index, 1);
    }

    view(index: Number) {
        let author = "";
        this.comments.forEach(function(item,i) {
            if (index == i ) {
                author = item.author;    
            }
        })
        this.router.navigateByUrl('/user/'+ author);
    }
}