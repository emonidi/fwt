webpackJsonp([1,4],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityComponent = (function () {
    function CityComponent() {
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-city',
            template: __webpack_require__(681),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], CityComponent);
    return CityComponent;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/city.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_test_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(testService, router) {
        var _this = this;
        this.router = router;
        this.cities = [];
        testService.getCities().subscribe(function (res) {
            _this.cities = res.json();
        });
    }
    ;
    HomeComponent.prototype.showCity = function (city) {
        debugger;
        this.router.navigate([city.name]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(682),
            styles: [__webpack_require__(677)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_test_service__["a" /* TestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_test_service__["a" /* TestService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/home.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = (function () {
    function TestService(client) {
        this.client = client;
    }
    TestService.prototype.getCities = function () {
        return this.client.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/cities');
    };
    TestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TestService);
    return TestService;
    var _a;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/test.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api'
};
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/environment.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(680),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__small_city_card_small_city_card_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__city_city_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__small_city_card_small_city_card_component__["a" /* SmallCityCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__city_city_component__["a" /* CityComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* AppRoutes */], { enableTracing: true }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__test_service__["a" /* TestService */], { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(683),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/navbar.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_home_home_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_city_city_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });


var AppRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0_app_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: ':cityName', component: __WEBPACK_IMPORTED_MODULE_1_app_city_city_component__["a" /* CityComponent */]
    }
];
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/index.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallCityCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmallCityCardComponent = (function () {
    function SmallCityCardComponent() {
        console.log(this.city);
    }
    SmallCityCardComponent.prototype.ngOnInit = function () {
        // this.city.backgroundImage = `url(${this.city.image})`;
    };
    SmallCityCardComponent.prototype.ngOnChanges = function (changes) {
        this.city = changes.city.currentValue;
        this.city.backgroundImage = "url(" + this.city.image + ")";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('city'), 
        __metadata('design:type', Object)
    ], SmallCityCardComponent.prototype, "city", void 0);
    SmallCityCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-small-city-card',
            template: __webpack_require__(684),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], SmallCityCardComponent);
    return SmallCityCardComponent;
}());
//# sourceMappingURL=/Users/emonidi/Dev/Projects/fwt/client/src/small-city-card.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".small-city-card{\n    min-height: 200px;\n    background-size: cover;\n    text-align: left;\n}\n\n.card-body{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n\n.card-title{\n    color:#fff;\n    font-weight: normal;\n}"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<p>\n  city works!\n</p>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n    <div class=\"row\">\n        <div *ngFor=\"let city of cities\" class=\"col-sm-12 col-md-3\">\n            <div>\n                <app-small-city-card (click)=\"showCity(city)\" [city]=\"city\"></app-small-city-card>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top nav-down\" color-on-scroll=\"500\">\n    <div class=\"container\">\n      <div class=\"navbar-translate\">\n        <a class=\"navbar-brand\" href=\"https://demos.creative-tim.com/paper-kit-2-pro/index.html\" rel=\"tooltip\" title=\"Paper Kit 2 PRO\" data-placement=\"bottom\" target=\"_blank\">\n          Free City Tours\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"collapse navbar-collapse\" data-nav-image=\"./assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"dropdown nav-item\">\n            <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n              Components </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n              <a href=\"./index.html\" class=\"dropdown-item\">\n                All Components\n              </a>\n              <a href=\"./presentation.html\" class=\"dropdown-item\">\n                Presentation\n              </a>\n              <a href=\"https://demos.creative-tim.com/paper-kit-2-pro/docs/1.0/getting-started/introduction.html\" class=\"dropdown-item\">\n                Documentation\n              </a>\n            </div>\n          </li>\n          <li class=\"dropdown nav-item\">\n            <a href=\"#\" class=\"dropdown-toggle nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\">\n              Sections\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-danger\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#headers\" href=\"./sections.html#headers\">\n                <i class=\"nc-icon nc-tile-56\"></i> Headers\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#features\" href=\"./sections.html#features\">\n                <i class=\"nc-icon nc-settings\"></i> Features\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#blogs\" href=\"./sections.html#blogs\">\n                <i class=\"nc-icon nc-bullet-list-67\"></i> Blogs\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#teams\" href=\"./sections.html#teams\">\n                <i class=\"nc-icon nc-single-02\"></i> Teams\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#projects\" href=\"./sections.html#projects\">\n                <i class=\"nc-icon nc-calendar-60\"></i> Projects\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#pricing\" href=\"./sections.html#pricing\">\n                <i class=\"nc-icon nc-money-coins\"></i> Pricing\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#testimonials\" href=\"./sections.html#testimonials\">\n                <i class=\"nc-icon nc-badge\"></i> Testimonials\n              </a>\n              <a class=\"dropdown-item\" data-scroll=\"true\" data-id=\"#contact-us\" href=\"./sections.html#contactus\">\n                <i class=\"nc-icon nc-mobile\"></i> Contact Us\n              </a>\n            </div>\n          </li>\n          <li class=\"dropdown nav-item\">\n            <a href=\"#\" class=\"dropdown-toggle nav-link\" id=\"navbarDropdownMenuLink1\" data-toggle=\"dropdown\">\n              Examples\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-danger\" aria-labelledby=\"navbarDropdownMenuLink1\">\n              <a class=\"dropdown-item\" href=\"./examples/about-us.html\">\n                <i class=\"nc-icon nc-bank\"></i> About-us\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/add-product.html\">\n                <i class=\"nc-icon nc-basket\"></i> Add Product\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/blog-post.html\">\n                <i class=\"nc-icon nc-badge\"></i> Blog Post\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/blog-posts.html\">\n                <i class=\"nc-icon nc-bullet-list-67\"></i> Blog Posts\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/contact-us.html\">\n                <i class=\"nc-icon nc-mobile\"></i> Contact Us\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/discover.html\">\n                <i class=\"nc-icon nc-world-2\"></i> Discover\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/ecommerce.html\">\n                <i class=\"nc-icon nc-send\"></i> Ecommerce\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/landing-page.html\">\n                <i class=\"nc-icon nc-spaceship\"></i> Landing Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/login-page.html\">\n                <i class=\"nc-icon nc-lock-circle-open\"></i> Login Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/product-page.html\">\n                <i class=\"nc-icon nc-album-2\"></i> Product Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/profile-page.html\">\n                <i class=\"nc-icon nc-single-02\"></i> Profile Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/register-page.html\">\n                <i class=\"nc-icon nc-bookmark-2\"></i> Register Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/search-with-sidebar.html\">\n                <i class=\"nc-icon nc-zoom-split\"></i> Search Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/settings.html\">\n                <i class=\"nc-icon nc-settings-gear-65\"></i> Settings Page\n              </a>\n              <a class=\"dropdown-item\" href=\"./examples/twitter-redesign.html\">\n                <i class=\"nc-icon nc-tie-bow\"></i> Twitter\n              </a>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"btn btn-round btn-danger\" href=\"https://www.creative-tim.com/product/paper-kit-2-pro\" target=\"_blank\">\n              <i class=\"nc-icon nc-cart-simple\"></i> Buy Now\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-twitter\"></i>\n\t\t\t\t\t\t<p class=\"hidden-lg-up\">Twitter</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-facebook-square\"></i>\n\t\t\t\t\t\t<p class=\"hidden-lg-up\">Facebook</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-instagram\"></i>\n\t\t\t\t\t\t<p class=\"hidden-lg-up\">Instagram</p>\n\t\t\t\t\t</a>\n\t\t\t\t</li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"small-city-card card\" [ngStyle]=\"{'background-image': city.backgroundImage}\">\n  <div class=\"card-body\" data-background=\"image\">\n      <a href=\"\">\n          <h4 class=\"card-title\">{{city.name}}</h4>\n      </a>\n  </div>\n</div>"

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[717]);
//# sourceMappingURL=main.bundle.map