import { Component, Input } from "@angular/core";

import { Comment } from "../models/comment.model";

@Component({
    moduleId: module.id,
    selector: "comment",
    templateUrl: "comment.component.html"
})

export class CommentComponent {

    @Input() comments: Comment [];
}