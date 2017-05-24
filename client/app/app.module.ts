import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header/header.component";

import { CommentService } from './services/comment.service';
import { AuthenticationService } from './services/authentication.service';
import { JwtService } from './services/jwt.service';
import { ApiService } from './services/api.service';

import { ShowAuthedDirective } from './directivies/auth.directive';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        CommentComponent,
        CommentListComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        ShowAuthedDirective
    ],
    providers: [
        CommentService,
        AuthenticationService,
        JwtService,
        ApiService,
        AppConfig
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }