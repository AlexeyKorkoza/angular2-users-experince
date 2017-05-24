import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

import { AuthenticationService } from './services/authentication.service';

import { User } from './models/user.model';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['../style.css']
})

export class AppComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService,
                private router: Router) { }

    ngOnInit() {
        this.authenticationService.checkAuth();
    }

}