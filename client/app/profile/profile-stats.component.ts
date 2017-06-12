import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../models/user.model";

import {UserService} from "../services/user.service";
import {AuthenticationService} from "../services/authentication.service";

@Component({
    moduleId: module.id,
    selector: "profile-stats",
    templateUrl: "profile-stats.component.html"
})

export class ProfileStatsComponent implements OnInit {

    user: User = new User();
    flag: boolean = false;
    url: any;
    userNameProfile: string;

    constructor(private router: Router,
                private userService: UserService,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.router.events.subscribe(
            (url: any) => {
                this.url = url.url.split("/");
                if (this.url.length == 3) {
                    let username = this.url[this.url.length - 1];
                    this.userService.getUserByUsername(username).subscribe(
                        (data) => {
                            (<any>Object).assign(this.user, data.user);
                        }
                    );
                    this.authenticationService.currentUser.subscribe(
                        (data) => {
                            if (data.username == username) {
                                this.flag = true;
                                this.userNameProfile = data.username;
                            }
                        }
                    );
                    this.userService.getUserStats(username).subscribe(
                        (data) => {
                            this.user = data.user;
                        }
                    )
                }
            }
        )
    }
}
