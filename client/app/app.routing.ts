import { Routes, RouterModule } from '@angular/router';

import { CommentListComponent } from "./comment/comment-list.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { OverViewProfileComponent } from "./profile/overview-profile.component";
import { EditProfileComponent } from "./profile/edit-profile.component";
import { ProfileCommentsComponent } from "./profile/profile-comments.component";

const appRoutes: Routes = [
    { path: '', component: CommentListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/:username', component: OverViewProfileComponent, 
        children: [
          { path: '', component: EditProfileComponent },
          { path: 'comments', component: ProfileCommentsComponent }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);