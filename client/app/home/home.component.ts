import { Component, OnInit } from '@angular/core';

import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    users: User [];

    ngOnInit() {
        this.userService.getLastFiveUser().subscribe(
            (data) => {
                console.log(data);
                this.users = data.users;
            }
        )
    }

}