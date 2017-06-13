import {OnInit, Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Comment} from "../models/comment.model";
import {CommentService} from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: "comment-editor",
    templateUrl: "comment-editor.component.html",
    styleUrls: ["./comment-editor.component.css"]
})

export class CommentEditorComponent implements OnInit {

    editorForm: any;
    url: string [];
    text: string;
    textButton: string;
    comment: Comment = new Comment();

    constructor(private commentService: CommentService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.editorForm = formBuilder.group({
            "title": [null, Validators.required],
            "text": [null, Validators.required]
        });
        this.url = router.url.split('/');
    }

    ngOnInit() {
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
    }

    save(model: any) {
        (<any>Object).assign(this.comment, model);
        this.commentService.saveComment(this.comment).subscribe();
        this.router.navigateByUrl('/comments/' + this.url[2]);
    }

}