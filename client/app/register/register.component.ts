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
    password_check: string = "";

    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder) {
            this.registerForm = formBuilder.group({
                'username' : [null, Validators.required],
                'email': [null, Validators.required],
                'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
                'confirm_password': [null ,Validators.required]
            })
         }

    register(value: any) {
        this.message = "";
        this.password_check = "";
        console.log(value);
        if(value.password != value.confirm_password){
            this.password_check = "Пароли не совпадают";
        } else {
        let date = new Date();
        let current_date = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
        let time = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();
        value.time = time;
        value.date = current_date;
        this.userService.create(value)
             .subscribe(
                 data => {
                    //  if(data.success){
                    //      
                    //  } else {
                    //      this.message = data.message;
                    //  }
                    console.log(data);
                    this.router.navigate(['/']);
                 },
                 error => {
                    console.log(error);
                 }
             )
    }
    }
}