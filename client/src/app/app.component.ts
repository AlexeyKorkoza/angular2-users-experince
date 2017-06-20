import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

import { AuthenticationService } from './services/authentication.service';

import { User } from './models/user.model';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService,
                private router: Router) { }

    ngOnInit() {
        this.authenticationService.checkAuth();
    }

}