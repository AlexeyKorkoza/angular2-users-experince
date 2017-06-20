import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router } from "@angular/router";

import { User } from "../shared/models/user.model";
import { UserService } from "../shared/services/user.service";
import { AuthenticationService } from "../shared/services/authentication.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

    users: User [];
    isAuthenticated: any;

    constructor(
        private userService: UserService,
        private router: Router,
        private authenticationService: AuthenticationService,
        private slimLoadingBarService: SlimLoadingBarService) {}

    ngOnInit() {
        this.slimLoadingBarService.start();
        this.userService.getLastFiveUser().subscribe(
            (data) => {
                this.users = data.users;
                this.slimLoadingBarService.complete();
            }
        );
        this.authenticationService.isAuthenticated.subscribe(
            (authenticated) => {
                this.isAuthenticated = authenticated;
            }
        )
    }

    viewProfile(index: number) {
        if (this.isAuthenticated) {
            let username;
            this.users.forEach(function (item, i) {
                if (index == i) {
                    username = item.username;
                }
            });
            this.router.navigateByUrl('/user/' + username);
        } else {
            this.router.navigateByUrl('/login');
        }
    }

}