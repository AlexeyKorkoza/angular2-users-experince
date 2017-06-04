import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

import { User } from '../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'header-layout',
    templateUrl: 'header.component.html',
    styleUrls: ["header.component.css"]
})

export class HeaderComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService) { 
    }

    currentUser: User;

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        )
    }

    logout() {
        this.authenticationService.logout();
    }

}