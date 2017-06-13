import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "register.component.html"
})

export class RegisterComponent {

    model: any = {};
    registerForm: any;
    message: string = "";
    password_check: string = "";

    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder) {
        this.registerForm = formBuilder.group({
            'username': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirm_password': [null, Validators.required]
        })
    }

    register(value: any) {
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
                data => {
                    this.router.navigate(['/']);
                }
                )
        }
    }
}