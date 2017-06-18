"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var authentication_service_1 = require("../services/authentication.service");
var user_model_1 = require("../models/user.model");
var EditProfileComponent = (function () {
    function EditProfileComponent(userService, formBuilder, route, router, authenticationService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = new user_model_1.User();
        this.editForm = formBuilder.group({
            'username': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(0)])],
            'password': ''
        });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.username = this.route.snapshot.parent.params['username'];
        this.userService.getUserByUsername(this.username);
        Object.assign(this.user, this.authenticationService.getCurrentUser());
    };
    EditProfileComponent.prototype.save = function (value) {
        var _this = this;
        Object.assign(this.user, value);
        this.authenticationService.updateUser(this.user).subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-profile',
            templateUrl: 'edit-profile.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            authentication_service_1.AuthenticationService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=edit-profile.component.js.map