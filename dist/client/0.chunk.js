webpackJsonpac__name_([0],{

/***/ 966:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(85);
var admin_component_1 = __webpack_require__(968);
var admin_dashboard_component_1 = __webpack_require__(967);
var manage_crises_component_1 = __webpack_require__(970);
var manage_heroes_component_1 = __webpack_require__(971);
var admin_routing_module_1 = __webpack_require__(972);
var admin_services_1 = __webpack_require__(969);
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                manage_crises_component_1.ManageCrisesComponent,
                manage_heroes_component_1.ManageHeroesComponent
            ],
            providers: [
                admin_services_1.AdminService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 967:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var admin_services_1 = __webpack_require__(969);
var profile_interface_1 = __webpack_require__(973);
var auth_service_1 = __webpack_require__(178);
__webpack_require__(124);
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
        this.user = new profile_interface_1.User();
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    AdminDashboardComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.adminService.getProfile().subscribe(function (profile) {
            console.log(profile);
            console.log(_this.user = new profile_interface_1.User(profile._id, profile.displayName, profile.email, profile.picture, profile.provider, profile.provider_id));
            //this.
        }, function (err) {
            console.log(err);
        });
    };
    AdminDashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"row col-md-8 col-md-offset-2 profile-section\">\n    <div class=\"col-md-8\">\n      <div class=\"col-md-12 profile-header\">\n        <div class=\"col-md-1 provider-logo\" [ngClass]=\"{'fb': user.provider == 'facebook', 'google': user.provider == 'google','linkedin': user.provider == 'linkedin' }\">\n          <span *ngIf=\" user.provider == 'facebook'\" class=\"fa fa-facebook\"></span>\n          <span *ngIf=\" user.provider == 'google'\" class=\"fa fa-google\"></span>\n          <span *ngIf=\" user.provider == 'linkedin'\" class=\"fa fa-linkedin\"></span>\n        </div>\n        <div class=\"col-md-9\"><b>Welcome</b> {{ user.displayName}}</div> \n        <div class=\"col-md-2\"><a class=\"logout-btn\" (click)=\"logout()\" *ngIf=\"authService.isLoggedIn()\">Logout</a></div>\n      </div>\n      <table class=\"table\"> \n      <tbody> \n      <tr> <td><b>User ID:</b></td> <td> {{ user._id}}</td> </tr> \n      <tr><td><b>Name:</b></td> <td> {{ user.displayName}}</td> </tr> \n      <tr><td><b>Email:</b></td> <td>{{ user.email}}</td> </tr> \n       <tr><td><b>Provider:</b></td> <td>{{ user.provider}}</td> </tr> \n        <tr><td><b>Provider ID:</b></td> <td>{{ user.provider_id}}</td> </tr> \n      </tbody> \n      </table>\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"{{ user.picture}}\" />\n    </div>\n    </div>\n    \n    \n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof admin_services_1.AdminService !== 'undefined' && admin_services_1.AdminService) === 'function' && _a) || Object, (typeof (_b = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _b) || Object])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
    var _a, _b;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            template: "\n   <!-- <nav>\n      <a routerLink=\"./\" routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n    </nav> -->\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 969:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(446);
var ng2_interceptors_1 = __webpack_require__(275);
// Import RxJs required methods
__webpack_require__(124);
__webpack_require__(447);
var AdminService = (function () {
    // Resolve HTTP using the constructor
    function AdminService(_http) {
        this._http = _http;
        this.commentsUrl = 'https://cuppa-angular2-oauth.herokuapp.com/api/profile';
    }
    AdminService.prototype.getProfile = function () {
        // ...using get request
        return this._http.get(this.commentsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ng2_interceptors_1.InterceptorService !== 'undefined' && ng2_interceptors_1.InterceptorService) === 'function' && _a) || Object])
    ], AdminService);
    return AdminService;
    var _a;
}());
exports.AdminService = AdminService;


/***/ },

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var ManageCrisesComponent = (function () {
    function ManageCrisesComponent() {
    }
    ManageCrisesComponent = __decorate([
        core_1.Component({
            template: "\n    <p>Manage your crises here</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ManageCrisesComponent);
    return ManageCrisesComponent;
}());
exports.ManageCrisesComponent = ManageCrisesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 971:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var ManageHeroesComponent = (function () {
    function ManageHeroesComponent() {
    }
    ManageHeroesComponent = __decorate([
        core_1.Component({
            template: "\n    <p>Manage your heroes here</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ManageHeroesComponent);
    return ManageHeroesComponent;
}());
exports.ManageHeroesComponent = ManageHeroesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 972:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(73);
var admin_component_1 = __webpack_require__(968);
var admin_dashboard_component_1 = __webpack_require__(967);
var manage_crises_component_1 = __webpack_require__(970);
var manage_heroes_component_1 = __webpack_require__(971);
var auth_service_1 = __webpack_require__(178);
var adminRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_service_1.AuthService],
        children: [
            {
                path: '',
                canActivateChild: [auth_service_1.AuthService],
                children: [
                    { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },
                    { path: 'heroes', component: manage_heroes_component_1.ManageHeroesComponent },
                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(adminRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 973:
/***/ function(module, exports) {

"use strict";
"use strict";
var User = (function () {
    function User(_id, displayName, email, picture, provider, provider_id) {
        if (_id === void 0) { _id = ""; }
        if (displayName === void 0) { displayName = ""; }
        if (email === void 0) { email = ""; }
        if (picture === void 0) { picture = ""; }
        if (provider === void 0) { provider = ""; }
        if (provider_id === void 0) { provider_id = ""; }
        this._id = _id;
        this.displayName = displayName;
        this.email = email;
        this.picture = picture;
        this.provider = provider;
        this.provider_id = provider_id;
    }
    return User;
}());
exports.User = User;


/***/ }

});
//# sourceMappingURL=0.map