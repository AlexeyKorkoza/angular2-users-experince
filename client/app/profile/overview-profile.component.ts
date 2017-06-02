import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'overview-profile',
    templateUrl: 'overview-profile.component.html'
})

export class OverViewProfileComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService,
        private userService: UserService,
        private route: ActivatedRoute) { }

    username: string;

    ngOnInit() {
        this.route.params.subscribe(
            (data) => {
                this.username = data.username;
            })
    }
}