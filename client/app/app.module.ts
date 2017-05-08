import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { CommentService } from './services/comment.service';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        CommentComponent,
        CommentListComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        CommentService,
        AppConfig
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }