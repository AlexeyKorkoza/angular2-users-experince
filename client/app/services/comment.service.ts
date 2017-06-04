import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { AppConfig } from "../app.config";
import { Comment } from "../models/comment.model";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

    comments: Comment[] = [];

    constructor(private http: Http, private appConfig: AppConfig) { }

    getComments() {
        return this.http.get(this.appConfig.urlServer + "/")
            .map(
            (res: Response) => res.json()
            );
    }

    getCommentByUsername(username: string) {
        return this.http.get(this.appConfig.urlServer + '/username', { params: { username: username } })
            .map((response: Response) => response.json());
    }
}