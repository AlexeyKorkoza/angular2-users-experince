import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { OverViewProfileComponent } from "./profile/overview-profile.component";
import { EditProfileComponent } from "./profile/edit-profile.component";
import { ProfileCommentsComponent } from "./profile/profile-comments.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
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