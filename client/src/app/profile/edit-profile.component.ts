import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { UserService } from "../services/user.service";
import { AuthenticationService } from "../services/authentication.service";

import { User } from "../models/user.model";

@Component({
    selector: 'edit-profile',
    templateUrl: './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

    editForm: FormGroup;
    username: string;
    user: User = new User();

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.editForm = formBuilder.group({
             'username': [null, Validators.compose([Validators.required, Validators.minLength(0)])],
             'password': ''
        })
    }

    ngOnInit() {
        this.username = this.route.snapshot.parent.params['username'];
        this.userService.getUserByUsername(this.username);
        (<any>Object).assign(this.user, this.authenticationService.getCurrentUser());
    }

    save(value: any) {
        (<any>Object).assign(this.user, value);
        this.authenticationService.updateUser(this.user).subscribe(
            data => {
                this.router.navigate(['']);
            }
        )
    }
}