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

    constructor(private formBuilder:FormBuilder){
        this.loginForm = formBuilder.group({
            "username": [null, Validators.required], 
            "password": [null, Validators.required]
        });
    }

    login(value: any){
        
    }
}