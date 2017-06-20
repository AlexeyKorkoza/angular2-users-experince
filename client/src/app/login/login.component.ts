import {OnInit, Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import {AuthenticationService} from "../services/authentication.service";

@Component({
    selector: "login",
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {

    loginForm: any;
    returnUrl: string;
    message: string = "";

    constructor(private authenticationService: AuthenticationService,
                private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private slimLoadingBarService: SlimLoadingBarService) {
        this.loginForm = formBuilder.group({
            "username": [null, Validators.required],
            "password": [null, Validators.required]
        });
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(value: any) {
        this.slimLoadingBarService.start();
        this.authenticationService.login(value).subscribe(
            () => {
                this.slimLoadingBarService.complete();
                this.router.navigate(['']);
            });
    }
}