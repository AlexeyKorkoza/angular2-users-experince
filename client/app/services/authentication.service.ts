import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppConfig } from '../app.config';
import { Router, ActivatedRoute } from "@angular/router";

import { User } from '../models/user.model';

import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
        private appConfig: AppConfig,
        private jwtService: JwtService,
        private userService: UserService,
        private router: Router) { }

    private currentUserSubject = new BehaviorSubject<User>(new User());
    public currentUser = this.currentUserSubject.asObservable();

    private isAuthenticatedSubject = new ReplaySubject(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    checkAuth() {
        if (this.jwtService.getToken()) {
            this.userService.getUser().subscribe(
                data => {
                    this.setAuth(data.user)
                },
                err => {
                    this.logout();
                }
            )
        } else {
            this.logout();
        }
    }

    setAuth(user: any) {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        this.jwtService.setToken(user.token);
    }

    login(user: any) {
        return this.http.post(this.appConfig.urlServer + "/auth/login", user)
            .map((res) => {
                let data = res.json();
                this.setAuth(data.user);
                return data.user;
            })
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    updateUser(data: any) {

        let headers = new Headers();
        headers.append('Authorization', 'Token ' + this.jwtService.getToken());

        return this.http.put(this.appConfig.urlServer + '/user/edit', { user: data }, { headers: headers })
            .map((res: Response) => {
                let resp = res.json();
                this.currentUserSubject.next(resp.user);
                return resp.user;
            });
    }

    logout() {
        this.jwtService.removeToken();
        this.currentUserSubject.next(new User());
        this.isAuthenticatedSubject.next(false);
    }

}