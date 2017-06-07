import { OnInit, Component } from "@angular/core";
import { FormBuilder, Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: "comment-editor",
    templateUrl: "comment-editor.component.html",
    styleUrls: ["./comment-editor.component.css"]
})

export class CommentEditorComponent implements OnInit{

    editorForm: any;
    paths: any;
    text: string;
    textButton: string;
    comment: Comment = new Comment();

    constructor(private commentService: CommentService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute){
        this.editorForm = formBuilder.group({
            "title": [null, Validators.required],
            "text": [null, Validators.required]
        });
    }

    ngOnInit() {
        this.paths = this.route.url.value;
        if(this.paths.length > 1) {
            this.text = "Edit";
            this.textButton = "Update";
            let id = this.paths[this.paths.length -1].path;
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
    }

}