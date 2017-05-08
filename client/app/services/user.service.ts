import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

import {AppConfig} from "../app.config";
import {User} from "../models/user.model"

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private appConfig: AppConfig) { }

    create(user: User) {
        return this.http.post(this.appConfig.urlServer + "/register", user).map((response: Response) => response.json());
    }

}