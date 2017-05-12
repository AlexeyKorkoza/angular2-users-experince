import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {error} from "util";

@Component({
    selector: "register",
    templateUrl: "app/register/register.component.html",
    styleUrls: ['../../style.css'],
    providers: [UserService]
})

export class RegisterComponent {

    model: any = {};
    registerForm: any;
    message: string = "";

    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder) {
            this.registerForm = formBuilder.group({
                'username' : [null, Validators.required],
                'email': [null, Validators.required],
                'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
                'confirm-password': [null ,Validators.required]
            })
         }

    register(value: any) {
        this.message = "";
        let date = new Date();
        let current_date = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
        let time = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();
        value.time = time;
        value.date = current_date;
        this.userService.create(value)
             .subscribe(
                 data => {
                     if(data.success){
                         this.router.navigate(['/']);
                     } else {
                         this.message = data.message;
                     }
                 },
                 error => {
                    console.log(error);
                 }
             )
    }
}