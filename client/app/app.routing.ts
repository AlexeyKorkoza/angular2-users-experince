import {Routes, RouterModule} from '@angular/router';

import {CommentListComponent} from "./comment/comment-list.component";

const appRoutes: Routes = [
    { path: '', component: CommentListComponent },
];

export const routing = RouterModule.forRoot(appRoutes);