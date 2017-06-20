import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "../models/user.model";
import { UserService } from "../services/user.service";
import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: "profile-stats",
    templateUrl: "./profile-stats.component.html"
})

export class ProfileStatsComponent implements OnInit {

    user: User = new User();
    flag: boolean = false;
    userNameProfile: string;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        let username = this.route.snapshot.parent.params['username'];
        this.userService.getUserByUsername(username).subscribe(
            data => {
                (<any>Object).assign(this.user, data.user);
            }
        );
        this.authenticationService.currentUser.subscribe(
            data => {
                if (data.username == username) {
                    this.flag = true;
                    this.userNameProfile = data.username;
                }
            }
        );
        this.userService.getUserStats(username).subscribe(
            data => {
                this.user = data.user;
            }
        )
    }

}
