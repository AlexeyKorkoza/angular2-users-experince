"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_select_1 = require("ng2-select");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var app_component_1 = require("./app.component");
var comment_component_1 = require("./comment/comment.component");
var comment_list_component_1 = require("./comment/comment-list.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var overview_profile_component_1 = require("./profile/overview-profile.component");
var edit_profile_component_1 = require("./profile/edit-profile.component");
var comment_user_component_1 = require("./comment/comment-user.component");
var home_component_1 = require("./home/home.component");
var comment_editor_component_1 = require("./comment/comment-editor.component");
var comment_user_view_component_1 = require("./comment/comment-user-view.component");
var profile_stats_component_1 = require("./profile/profile-stats.component");
var search_comments_component_1 = require("./search/search-comments.component");
var comment_service_1 = require("./services/comment.service");
var authentication_service_1 = require("./services/authentication.service");
var jwt_service_1 = require("./services/jwt.service");
var user_service_1 = require("./services/user.service");
var auth_directive_1 = require("./directivies/auth.directive");
var app_config_1 = require("./app.config");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                ng2_select_1.SelectModule,
                ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                comment_component_1.CommentComponent,
                comment_list_component_1.CommentListComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                overview_profile_component_1.OverViewProfileComponent,
                edit_profile_component_1.EditProfileComponent,
                comment_user_component_1.CommentUserComponent,
                comment_user_view_component_1.CommentUserViewComponent,
                home_component_1.HomeComponent,
                comment_editor_component_1.CommentEditorComponent,
                profile_stats_component_1.ProfileStatsComponent,
                auth_directive_1.ShowAuthedDirective,
                search_comments_component_1.SearchCommentsComponent
            ],
            providers: [
                comment_service_1.CommentService,
                authentication_service_1.AuthenticationService,
                jwt_service_1.JwtService,
                user_service_1.UserService,
                app_config_1.AppConfig
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map