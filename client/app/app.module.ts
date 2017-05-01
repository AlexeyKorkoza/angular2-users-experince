import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }   from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';

import { CommentService } from './comment/comment.service';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        CommentComponent,
        CommentListComponent
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