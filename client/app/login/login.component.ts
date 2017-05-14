import { Component } from "@angular/core";
import { FormBuilder, Validators} from "@angular/forms";

import { AuthenticationService } from "../services/authentication.service"; 

@Component({
    selector: "login",
    templateUrl: "app/login/login.component.html",
    styleUrls: ['../../style.css'],
    providers: [AuthenticationService]
})

export class LoginComponent{

    loginForm: any;
    message: string = "";

    constructor(private authenticationService: AuthenticationService, private formBuilder:FormBuilder){
        this.loginForm = formBuilder.group({
            "username": [null, Validators.required], 
            "password": [null, Validators.required]
        });
    }

    login(value: any){
        this.authenticationService.login(value).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }
}