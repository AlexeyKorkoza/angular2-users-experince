import { Component, Input } from "@angular/core";

import { Comment } from "../models/comment.model";

@Component({
    selector: "comment",
    templateUrl: "app/comment/comment.component.html",
    styleUrls: ["../../style.css"]
})

export class CommentComponent {

    @Input() comments: Comment [];
}