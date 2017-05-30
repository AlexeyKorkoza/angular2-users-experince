import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

import { User } from '../models/user.model';

@Component({
    selector: 'header-layout',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ["app/header/header.component.css"]
})

export class HeaderComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService) { 
    }

    currentUser: User;

    ngOnInit() {
        this.authenticationService.currentUser().subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        )
    }

    logout() {
        this.authenticationService.logout();
    }
}