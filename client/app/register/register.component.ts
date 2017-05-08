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
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    alert(error);
                }
            )
    }
}