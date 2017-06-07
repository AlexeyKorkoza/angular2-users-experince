import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { OverViewProfileComponent } from "./profile/overview-profile.component";
import { EditProfileComponent } from "./profile/edit-profile.component";
import { CommentUserComponent } from "./comment/comment-user.component";
import { CommentEditorComponent } from "./comment/comment-editor.component";
import { CommentUserViewComponent } from "./comment/comment-user-view.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/:username', component: OverViewProfileComponent, 
        children: [
          { path: '', component: EditProfileComponent }
        ]
    },
    { path: 'comments/:username', component: CommentUserComponent,
        children: [
          { path: '', component: CommentUserViewComponent },
          { path: 'create', component: CommentEditorComponent },
          { path: 'edit/:id', component: CommentEditorComponent }
        ]
    },
];

export const routing = RouterModule.forRoot(appRoutes);