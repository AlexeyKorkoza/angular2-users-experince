import { OnInit, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    selector: "comment-editor",
    templateUrl: "./comment-editor.component.html",
    styleUrls: ["./comment-editor.component.css"]
})

export class CommentEditorComponent implements OnInit {

    editorForm: any;
    url: string [];
    text: string;
    textButton: string;
    comment: Comment = new Comment();

    constructor(
        private commentService: CommentService,
        private formBuilder: FormBuilder,
        private router: Router,
        private slimLoadingBarService: SlimLoadingBarService) {
        this.editorForm = formBuilder.group({
            "title": [null, Validators.required],
            "text": [null, Validators.required]
        });
        this.url = router.url.split('/');
    }

    ngOnInit() {
        this.slimLoadingBarService.start();
        if (this.url.length === 5) {
            this.text = "Edit";
            this.textButton = "Update";
            let id = this.url[this.url.length - 1];
            this.commentService.getCommentById(id).subscribe(
                (data) => {
                    (<any>Object).assign(this.comment, data.comment);
                    this.editorForm.patchValue(this.comment);
                }
            );
        } else {
            this.text = "Create new";
            this.textButton = "Create";
        }
        this.slimLoadingBarService.complete();
    }

    save(model: any) {
        this.slimLoadingBarService.start();
        (<any>Object).assign(this.comment, model);
        this.commentService.saveComment(this.comment).subscribe();
        this.slimLoadingBarService.complete();
        this.router.navigateByUrl('/comments/' + this.url[2]);
    }

}