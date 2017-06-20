import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.checkAuth();
    }

}