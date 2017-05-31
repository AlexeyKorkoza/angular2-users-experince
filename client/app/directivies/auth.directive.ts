import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../services/authentication.service';
declare var $: any;

@Directive({ 
    selector: '[showAuthed]'
})

export class ShowAuthedDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private authenticationService: AuthenticationService,
        private viewContainer: ViewContainerRef
    ) { }

    private isAuthenticated: any;
    private subscription: Subscription;

    @Input() set showAuthed(condition: boolean) {
        this.authenticationService.authenticated().subscribe(
            (isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
                if (!condition && !this.isAuthenticated || condition && this.isAuthenticated) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                    $(".ng2-dropdown-container").css("margin-top", "10px");
                    $(".ng2-dropdown-button[_ngcontent-c3]").css({
                        "background": "#66ff66",
                        "color": "#fff",
                        "font-family": "'Source Sans Pro', sans-serif",
                        "font-size": "14pt",
                        "min-width": "0px",
                        "max-width": "none"
                    });
                    $(".ng2-dropdown-button[_ngcontent-c3]").css("border-bottom", "0px");
                    $(".ng2-dropdown-button__label[_ngcontent-c3]").css({
                        "-webkit-box-flex":"initial", 
                        "flex":"initial",
                        "-ms-flex": "initial"
                    })
                    if($("html").width() < 600) {
                        
                    }
                } else {
                    this.viewContainer.clear();
                }
            }
        );
    }

}