import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

import {AppConfig} from "../app.config";
import {User} from "../models/user.model";

import { JwtService } from "./jwt.service";

@Injectable()
export class UserService {

    constructor(private http: Http,
                private appConfig: AppConfig,
                private jwtService: JwtService) {
    }

    create(user: User): Observable<User> {
        return this.http.post(this.appConfig.urlServer + "/users/register", user )
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUser(){

        let headers = new Headers();
        headers.append('Authorization','Token ' + this.jwtService.getToken());

        return this.http.get(this.appConfig.urlServer + "/user", { headers: headers } )
            .map((res:Response) => res.json());
    }

}