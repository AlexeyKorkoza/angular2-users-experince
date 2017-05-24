import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../services/authentication.service';

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
                } else {
                    this.viewContainer.clear();
                }
            }
        );
    }

}