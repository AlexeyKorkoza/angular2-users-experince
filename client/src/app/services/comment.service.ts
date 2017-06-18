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

    getCommentById(id: string) {
         return this.http.get(this.appConfig.urlServer + '/comment/edit/' + id, { params: { id: id } })
             .map((response: Response) => response.json());
    }

    getAuthors() {
        return this.http.get(this.appConfig.urlServer + "/comment/authors")
               .map((response: Response) => {
                let data = response.json();
                let authors = [];
                for (let index in data.authors) {
                    authors.push(data.authors[index].author);
                }
                return authors;
        })
    }

    saveComment(comment: Comment): Observable<Comment> {
        if(comment._id) {
            return this.http.put(this.appConfig.urlServer + "/comment/edit/" + comment._id, { comment: comment } )
                .map((response: Response) => response.json());
        } else {
            return this.http.post(this.appConfig.urlServer + "/comment/create", { comment: comment} )
                .map((response: Response) => response.json());
        }
    }

    search(comment: Comment) {
        return this.http.post(this.appConfig.urlServer + "/comment/search", { comment: comment } )
            .map((response: Response) => response.json());
    }   

    removeComment(id: string) {
        return this.http.delete(this.appConfig.urlServer + "/comment/" + id, { params: { id: id } })
    }
}