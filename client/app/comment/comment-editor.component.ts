import { OnInit, Component } from "@angular/core";
import { FormBuilder, Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { CommentService } from "../services/comment.service";

@Component({
    moduleId: module.id,
    selector: "comment-editor",
    templateUrl: "comment-editor.component.html",
    styleUrls: ["./comment-editor.component.css"]
})

export class CommentEditorComponent implements OnInit{

    editorForm: any;

    constructor(private commentService: CommentService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute){
        this.editorForm = formBuilder.group({
            "title": [null, Validators.required],
            "text": [null, Validators.required]
        });
    }

    ngOnInit(){

    }

    create(model: any) {
        const parentActivatedRoute = this.route.parent;
        model.author = parentActivatedRoute.snapshot.params['username'];
        model.favorite = 0;
        this.commentService.createComment(model).subscribe();
    }

}