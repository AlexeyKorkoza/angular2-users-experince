import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit {
    constructor(private userService: UserService,
                private slimLoadingBarService: SlimLoadingBarService) {
    }

    users: User [];

    ngOnInit() {
        this.slimLoadingBarService.start();
        this.userService.getLastFiveUser().subscribe(
            (data) => {
                this.users = data.users;
                this.slimLoadingBarService.complete();
            }
        )
    }

}