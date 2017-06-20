import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { FormBuilder, Validators } from "@angular/forms";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: "register",
    templateUrl: "./register.component.html"
})

export class RegisterComponent {

    model: any = {};
    registerForm: any;
    message: string = "";
    password_check: string = "";

    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder,
        private slimLoadingBarService: SlimLoadingBarService) {
        this.registerForm = formBuilder.group({
            'username': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirm_password': [null, Validators.required]
        })
    }

    register(value: any) {
        this.slimLoadingBarService.start();
        this.message = "";
        this.password_check = "";
        if (value.password != value.confirm_password) {
            this.password_check = "Пароли не совпадают";
        } else {
            let date = new Date();
            let current_date = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            value.time = time;
            value.date = current_date;
            this.userService.create(value).subscribe(
                () => {
                    this.router.navigate(['/']);
                }
            )
        }
        this.slimLoadingBarService.complete();
    }
}