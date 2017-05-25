import { OnInit, Component } from "@angular/core";
import { FormBuilder, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from "../services/authentication.service"; 

@Component({
    selector: "login",
    templateUrl: "app/login/login.component.html",
    styleUrls: ['../../style.css']
})

export class LoginComponent implements OnInit{

    loginForm: any;
    returnUrl: string;
    message: string = "";

    constructor(private authenticationService: AuthenticationService, 
                private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute){
        this.loginForm = formBuilder.group({
            "username": [null, Validators.required], 
            "password": [null, Validators.required]
        });
    }

    ngOnInit(){
         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(value: any){
        this.authenticationService.login(value).subscribe(
            data => {
                this.router.navigate(['']);
            });
    }
}