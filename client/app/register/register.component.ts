import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {error} from "util";

@Component({
    selector: "register",
    templateUrl: "app/register/register.component.html",
    styleUrls: ['../../style.css'],
    providers: [UserService]
})

export class RegisterComponent {

    model: any = {};

    constructor(
        private userService: UserService,
        private router: Router) { }

    register() {
        let date = new Date();
        let current_date = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
        let time = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();
        this.model.time = time;
        this.model.date = current_date;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.success){
                        this.router.navigate(['/']);
                    }
                },
                error => {
                    console.log(error);
                }
            )
    }
}