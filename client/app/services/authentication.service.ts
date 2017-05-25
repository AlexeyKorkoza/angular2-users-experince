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

    private currentUserSubject = new BehaviorSubject<any>('');
    private isAuthenticatedSubject = new ReplaySubject(1);

    currentUser(): Observable<any> {
        return this.currentUserSubject.asObservable();
    }

    authenticated(): Observable<any> {
        return this.isAuthenticatedSubject.asObservable();
    }

    checkAuth() {
        if (this.jwtService.getToken()) {
            console.log("Auth");
            this.userService.getUser().subscribe(
                data => {
                    console.log(data);
                    console.log(data.user);
                    this.setAuth(data.user)
                },
                err => {
                    this.logout();
                }
            )
        } else {
            console.log("NoAuth");
            this.logout();
        }
    }

    setAuth(user: any) {
        console.log(user);
        console.log(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        this.jwtService.setToken(user.token);
        console.log(this.currentUserSubject);
        console.log(this.isAuthenticatedSubject);
    }

    login(user: any) {
        return this.http.post(this.appConfig.urlServer + "/auth/login", user)
            .map((res) => {
                let data = res.json();
                this.setAuth(data.user);
                return data;
            })
    }

    logout() {
        this.jwtService.removeToken();
        this.currentUserSubject.next(new User());
        this.isAuthenticatedSubject.next(false);
    }

}