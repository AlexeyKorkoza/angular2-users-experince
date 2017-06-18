"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var overview_profile_component_1 = require("./profile/overview-profile.component");
var edit_profile_component_1 = require("./profile/edit-profile.component");
var comment_user_component_1 = require("./comment/comment-user.component");
var comment_editor_component_1 = require("./comment/comment-editor.component");
var comment_user_view_component_1 = require("./comment/comment-user-view.component");
var profile_stats_component_1 = require("./profile/profile-stats.component");
var search_comments_component_1 = require("./search/search-comments.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'user/:username', component: overview_profile_component_1.OverViewProfileComponent,
        children: [
            { path: '', component: profile_stats_component_1.ProfileStatsComponent },
            { path: 'edit', component: edit_profile_component_1.EditProfileComponent }
        ]
    },
    { path: 'comments/:username', component: comment_user_component_1.CommentUserComponent,
        children: [
            { path: '', component: comment_user_view_component_1.CommentUserViewComponent },
            { path: 'create', component: comment_editor_component_1.CommentEditorComponent },
            { path: 'edit/:id', component: comment_editor_component_1.CommentEditorComponent }
        ]
    },
    { path: 'search', component: search_comments_component_1.SearchCommentsComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map