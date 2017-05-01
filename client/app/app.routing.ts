import {Routes, RouterModule} from '@angular/router';

import {CommentListComponent} from "./comment/comment-list.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
    { path: '', component: CommentListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes);