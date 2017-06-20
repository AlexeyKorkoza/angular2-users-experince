import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectModule }  from 'ng2-select';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent }   from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { OverViewProfileComponent } from "./profile/overview-profile.component";
import { EditProfileComponent } from "./profile/edit-profile.component";
import { CommentUserComponent } from "./comment/comment-user.component";
import { HomeComponent } from "./home/home.component";
import { CommentEditorComponent } from "./comment/comment-editor.component";
import { CommentUserViewComponent } from "./comment/comment-user-view.component";
import { ProfileStatsComponent } from "./profile/profile-stats.component";
import { SearchCommentsComponent } from "./search/search-comments.component";

import { CommentService } from './services/comment.service';
import { AuthenticationService } from './services/authentication.service';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';

import { ShowAuthedDirective } from './directivies/auth.directive';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SelectModule,
        SlimLoadingBarModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        CommentComponent,
        CommentListComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        OverViewProfileComponent,
        EditProfileComponent,
        CommentUserComponent,
        CommentUserViewComponent,
        HomeComponent,
        CommentEditorComponent,
        ProfileStatsComponent,
        ShowAuthedDirective,
        SearchCommentsComponent
    ],
    providers: [
        CommentService,
        AuthenticationService,
        JwtService,
        UserService,
        AppConfig
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }