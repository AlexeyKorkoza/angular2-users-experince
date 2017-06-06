import { Injectable } from "@angular/core";
import {Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import { AppConfig } from "../app.config";
import { Comment } from "../models/comment.model";

@Injectable()
export class CommentService {

    constructor(private http: Http, private appConfig: AppConfig) { }

    getComments() {
        return this.http.get(this.appConfig.urlServer + "/comment")
            .map((res: Response) => res.json());
    }

    getCommentByUsername(username: string) {
        return this.http.get(this.appConfig.urlServer + '/comment/username', { params: { username: username } })
            .map((response: Response) => response.json());
    }

    createComment(comment: Comment): Observable<Comment> {
        console.log(comment);
        return this.http.post(this.appConfig.urlServer + "/comment/create", { comment: comment } )
            .map((response: Response) => response.json());
    }

    removeComment(id: string) {
        return this.http.delete(this.appConfig.urlServer + "/comment/" + id, { params: { id: id } })
    }
}