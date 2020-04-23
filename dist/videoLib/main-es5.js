function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/access/access.component.ts":
  /*!********************************************!*\
    !*** ./src/app/access/access.component.ts ***!
    \********************************************/

  /*! exports provided: AccessComponent */

  /***/
  function srcAppAccessAccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessComponent", function () {
      return AccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AccessComponent =
    /*#__PURE__*/
    function () {
      function AccessComponent(router) {
        _classCallCheck(this, AccessComponent);

        this.router = router;
        var txt;
        var person = prompt("Digite o código de acesso:", "");

        if (person == null || person == "") {
          alert("You don't have access to this website. Please contact the administrator. ");
          window.location.href = 'https://myconnect.gsk.com/';
        } else if (person == "GSK123" || person == "gsk123") {
          this.router.navigateByUrl('/login');
        } else {
          alert("You don't have access to this website. Please contact the administrator. ");
          window.location.href = 'https://myconnect.gsk.com/';
        }
      }

      _createClass(AccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessComponent;
    }();

    AccessComponent.ɵfac = function AccessComponent_Factory(t) {
      return new (t || AccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccessComponent,
      selectors: [["app-access"]],
      decls: 2,
      vars: 0,
      template: function AccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't have access to this content. Please contact the administrator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy9hY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-access',
          templateUrl: './access.component.html',
          styleUrls: ['./access.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _access_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./access/access.component */
    "./src/app/access/access.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'list',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'access',
      component: _access_access_component__WEBPACK_IMPORTED_MODULE_4__["AccessComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ng_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-connection-service */
    "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(connectionService, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.connectionService = connectionService;
        this.router = router;
        this.title = 'videoLib';
        this.status = 'ONLINE';
        this.isConnected = true;
        this.connectionService.monitor().subscribe(function (isConnected) {
          _this.isConnected = isConnected;

          if (_this.isConnected) {
            _this.status = "ONLINE";
          } else {
            _this.status = "OFFLINE";
          }
        });
        var navegar = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        }));
        navegar.subscribe(function (event) {
          gtag('config', 'UA-159221095-1', {
            'page_path': event.urlAfterRedirects
          });
        });
        this.router.navigateByUrl('/access');
      }

      _createClass(AppComponent, [{
        key: "home",
        value: function home() {
          this.router.navigateByUrl('/home');
          alert('Calm down.. teremos um login aqui');
        }
      }, {
        key: "videos",
        value: function videos() {
          this.router.navigateByUrl('/list');
          alert('Calm down.. teremos um login aqui');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _secure_url_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./secure-url.pipe */
    "./src/app/secure-url.pipe.ts");
    /* harmony import */


    var _access_access_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./access/access.component */
    "./src/app/access/access.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _unique_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./unique.pipe */
    "./src/app/unique.pipe.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ng_google_analytics__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-google-analytics */
    "./node_modules/ng-google-analytics/__ivy_ngcc__/fesm2015/ng-google-analytics.js");
    /* harmony import */


    var ng_connection_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-connection-service */
    "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"],
        useValue: {
          hasBackdrop: false
        }
      }, {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],
        useValue: {}
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], ng_google_analytics__WEBPACK_IMPORTED_MODULE_20__["NgGoogleAnalyticsModule"].forRoot({
        id: 'UA-159221095-1'
      }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_connection_service__WEBPACK_IMPORTED_MODULE_21__["ConnectionServiceModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"], _secure_url_pipe__WEBPACK_IMPORTED_MODULE_14__["SecureUrlPipe"], _access_access_component__WEBPACK_IMPORTED_MODULE_15__["AccessComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"], _unique_pipe__WEBPACK_IMPORTED_MODULE_17__["UniquePipe"], _info_info_component__WEBPACK_IMPORTED_MODULE_22__["InfoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], ng_google_analytics__WEBPACK_IMPORTED_MODULE_20__["NgGoogleAnalyticsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_connection_service__WEBPACK_IMPORTED_MODULE_21__["ConnectionServiceModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["routingComponents"], _video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"], _secure_url_pipe__WEBPACK_IMPORTED_MODULE_14__["SecureUrlPipe"], _access_access_component__WEBPACK_IMPORTED_MODULE_15__["AccessComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"], _unique_pipe__WEBPACK_IMPORTED_MODULE_17__["UniquePipe"], _info_info_component__WEBPACK_IMPORTED_MODULE_22__["InfoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], ng_google_analytics__WEBPACK_IMPORTED_MODULE_20__["NgGoogleAnalyticsModule"].forRoot({
            id: 'UA-159221095-1'
          }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_connection_service__WEBPACK_IMPORTED_MODULE_21__["ConnectionServiceModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
          })],
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"],
            useValue: {
              hasBackdrop: false
            }
          }, {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],
            useValue: {}
          }],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/db.service.ts":
  /*!*******************************!*\
    !*** ./src/app/db.service.ts ***!
    \*******************************/

  /*! exports provided: DbService */

  /***/
  function srcAppDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbService", function () {
      return DbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DbService =
    /*#__PURE__*/
    function () {
      function DbService(http) {
        _classCallCheck(this, DbService);

        this.http = http;
        this.users = [];
        this.videos = [];
        this.views = [];
      }

      _createClass(DbService, [{
        key: "data2",
        value: function data2(video) {
          console.log(video);
          /* var headers = new HttpHeaders();
           headers.add('Access-Control-Allow-Origin', '*')
           const httpOptions = {
                headers: new HttpHeaders({
                 'Content-Type':  'application/json',
                 'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca',
                 'Access-Control-Allow-Origin': '*'
               })
                  };*/

          this.http.post('https://cors-anywhere.herokuapp.com/' + 'https://gskvideolib.azure-api.net/views:433/', video).subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
          }, function (response) {
            console.log("POST call in error", response);
          }, function () {
            console.log("The POST observable is now completed.");
          });
        }
      }, {
        key: "data",
        value: function data() {
          var _this2 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this2.http.get('https://gskvideolib.azure-api.net/videos').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this2.videos = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }]);

      return DbService;
    }();

    DbService.ɵfac = function DbService_Factory(t) {
      return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbService,
      factory: DbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var ng_google_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-google-analytics */
    "./node_modules/ng-google-analytics/__ivy_ngcc__/fesm2015/ng-google-analytics.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../db.service */
    "./src/app/db.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _secure_url_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../secure-url.pipe */
    "./src/app/secure-url.pipe.ts");

    var _c0 = ["passcode"];

    function HomeComponent_li_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "secureUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_21_div_1_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var items_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.info(items_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Watch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, items_r13.URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r13.Nombre_del_video);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", items_r13.Codigo_de_Division, " | ", items_r13.area_terapeutica, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r13.Description);
      }
    }

    function HomeComponent_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_li_21_div_1_Template, 16, 7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r13.Pais == ctx_r12.usuario.Pais);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(data, dialog, googleAnalyticsService, router, sanitizer, db) {
        var _this3 = this;

        _classCallCheck(this, HomeComponent);

        this.data = data;
        this.dialog = dialog;
        this.googleAnalyticsService = googleAnalyticsService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.db = db;
        this.allList = [];
        this.result = [];
        this.usuario = [];
        this.views = [];
        this.videos = [];
        this.produtos = [];
        this.division = [];
        this.divisions = [];
        this.codigo = [];
        this.videosSF = [];
        this.divisionUser = [];
        this.tag = [];
        this.area = [];
        this.lista = [];
        this.dividiu = [];
        this.usuario = JSON.parse(localStorage.getItem('user'));
        this.divisions = JSON.parse(localStorage.getItem('divisions'));
        this.videos = JSON.parse(localStorage.getItem('videos'));
        this.produtos = JSON.parse(localStorage.getItem('produtos'));
        console.log(this.usuario);
        console.log(this.division);
        console.log(this.videos);
        console.log(this.produtos); //this.filtrei = JSON.parse(localStorage.getItem('videos'));
        //console.log(this.filtrei)

        this.divisionUser = this.divisions.filter(function (i) {
          return i.Codigo_de_Division === _this3.usuario.Codigo_de_Division;
        });
        console.log(this.divisionUser);
        console.log(this.divisionUser.length);

        if (this.divisionUser.length > 1) {
          this.dividiu = this.divisionUser[0];
          console.log(this.dividiu);
        } else {
          this.dividiu = this.divisionUser;
        }

        this.filtrai = this.videos;
        this.division = this.divisions.sort(function (a, b) {
          return b.index - a.index;
        });
        this.codigo = this.produtos;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }, {
        key: "cordiv",
        value: function cordiv() {
          var mainVideo = document.getElementById('mainVideo');
          mainVideo.autoplay = false;
          mainVideo.load();
          console.log('conta play');
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigateByUrl('/home');
        }
      }, {
        key: "videoss",
        value: function videoss() {
          this.router.navigateByUrl('/list');
        }
      }, {
        key: "filtri",
        value: function filtri(codigo) {
          var videos = this.videos;
          console.log(videos);

          if (videos.filter(function (i) {
            return i.Codigo_de_Division === codigo;
          })) {
            this.filtrai = videos.filter(function (i) {
              return i.Codigo_de_Division === codigo;
            });
            this.codigo = this.produtos.filter(function (i) {
              return i.Codigo_de_Division === codigo;
            });
            console.log(this.codigo);
            console.log(this.filtrai);
          } else {
            this.filtrai = this.videos;
          }

          console.log(codigo);
        }
      }, {
        key: "info",
        value: function info(items) {
          var dialogRef = this.dialog.open(_video_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], {
            height: '100%',
            width: '100%',
            data: {
              Pais: items.Pais,
              Codigo_de_Division: items.Codigo_de_Division,
              Nombre_del_video: items.Nombre_del_video,
              division_description: items.division_description,
              Description: items.Description,
              Root: items.Root,
              URL: items.URL,
              usuario: this.usuario.Nombre_del_representa,
              mudId: this.usuario.MudId,
              disclaimer: items.disclaimer,
              area_terapeutica: items.area_terapeutica,
              link_produto: items.link_produto,
              info_txt: items.info_txt
            }
          });
          localStorage.setItem('video', JSON.stringify(dialogRef.componentInstance.data));
          console.log(dialogRef.componentInstance.data);
          this.views = localStorage.getItem('video');
          localStorage.removeItem('percentual');
        }
      }, {
        key: "filtro",
        value: function filtro(event) {
          this.area = this.videos.filter(function (i) {
            return String(i.area_terapeutica.toUpperCase()).indexOf(event.target.value.toUpperCase()) >= 0;
          });
          this.tag = this.videos.filter(function (i) {
            return String(i.tags.toUpperCase()).indexOf(event.target.value.toUpperCase()) >= 0;
          }); // this.filtrai = this.tag

          if (this.filtrai != []) {
            this.filtrai = this.area; // console.log(this.filtrai)

            if (this.filtrai.length == 0) {
              this.filtrai = this.tag; // console.log(this.filtrai)
            }
          } else {
            this.filtrai = this.videos;
          } // console.log(JSON.stringify(this.area))
          //console.log("Rsultado em area" + JSON.stringify(this.area)) 
          //  console.log(this.area)

        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_google_analytics__WEBPACK_IMPORTED_MODULE_4__["NgGoogleAnalyticsTracker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uname = _t.first);
        }
      },
      decls: 22,
      vars: 2,
      consts: [["color", "#dac84c"], ["src", "/assets/gsk_branco.png"], [1, "example-fill-remaining-space"], [2, "margin-top", "18px", "margin-bottom", "1rem", "margin-right", "15px"], [1, "transparent-card"], [2, "text-align", "center !important"], ["id", "passcode", "placeholder", "Search", "aria-describedby", "search", 1, "form-control", 2, "border-radius", "25px", "width", "75%", "margin-top", "5%", "margin-left", "auto", "text-align", "center", "margin-right", "auto", "box-shadow", "3px 3px #cecdcd", 3, "keyup"], ["passcode", ""], [1, "container", "colors"], [1, "container", 2, "text-align", "-webkit-center"], [1, "row"], [1, "col-xl"], [1, "list-group"], ["style", "list-style-type: none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"], ["class", "card card-videos", "style", "width:100%; margin-right: 5px; height: auto; ", 4, "ngIf"], [1, "card", "card-videos", 2, "width", "100%", "margin-right", "5px", "height", "auto"], [1, "card-body"], [1, "col-sm"], ["id", "mainVideo", "width", "100%", "height", "auto", "nocontrols", "", "preload", "yes", 2, "border", "2px solid black"], ["autostart", "false", "type", "video/mp4", 3, "src"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-right", "3%", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GSK Video Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_13_listener($event) {
            return ctx.filtro($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_li_21_Template, 2, 1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx.usuario.Nombre_del_representa, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtrai);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      pipes: [_secure_url_pipe__WEBPACK_IMPORTED_MODULE_11__["SecureUrlPipe"]],
      styles: [".transparent-card[_ngcontent-%COMP%] {\n  height: 28% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGN0Mjk3MTU0XFxPbmVEcml2ZSAtIEdTS1xcRGVza3RvcFxcQ2Fpb0RFVkxvY2FsXFx2aWRlb0xpYi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVudC1jYXJke1xyXG5cdGhlaWdodDoyOCUgIWltcG9ydGFudDtcclxuXHJcbn0iLCIudHJhbnNwYXJlbnQtY2FyZCB7XG4gIGhlaWdodDogMjglICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: ng_google_analytics__WEBPACK_IMPORTED_MODULE_4__["NgGoogleAnalyticsTracker"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]
        }];
      }, {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]]
        }],
        uname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['passcode']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var InfoComponent =
    /*#__PURE__*/
    function () {
      function InfoComponent(dialogRef, data, dialog) {
        _classCallCheck(this, InfoComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close('Pizza!');
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 4,
      vars: 1,
      consts: [["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "card-body"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_0_listener($event) {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.info_txt, " ");
        }
      },
      styles: [".mat-dialog-container[_ngcontent-%COMP%] {\n  width: 50% !important;\n  height: 50% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcVXNlcnNcXGN0Mjk3MTU0XFxPbmVEcml2ZSAtIEdTS1xcRGVza3RvcFxcQ2Fpb0RFVkxvY2FsXFx2aWRlb0xpYi9zcmNcXGFwcFxcaW5mb1xcaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDo1MCUgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDo1MCUgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRcclxufSIsIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _secure_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../secure-url.pipe */
    "./src/app/secure-url.pipe.ts");

    var _c0 = ["uname"];
    var _c1 = ["passcode"];

    function ListComponent_li_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "secureUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_34_div_1_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var items_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.info(items_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Watch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, items_r5.URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r5.Nombre_del_video);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", items_r5.Codigo_de_Division, " | ", items_r5.area_terapeutica, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r5.Description);
      }
    }

    function ListComponent_li_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_li_34_div_1_Template, 16, 7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r5.Pais == ctx_r4.usuario.Pais);
      }
    }

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(data, router, dialog, http) {
        var _this4 = this;

        _classCallCheck(this, ListComponent);

        this.data = data;
        this.router = router;
        this.dialog = dialog;
        this.http = http;
        this.videos = [];
        this.allList = [];
        this.result = [];
        this.division = [];
        this.divisions = [];
        this.produtos = [];
        this.videosSF = [];
        this.tag = [];
        this.area = [];
        this.lista = [];
        this.usuario = JSON.parse(localStorage.getItem('user'));
        this.produtos = JSON.parse(localStorage.getItem('produtos'));
        console.log(this.produtos);

        if (localStorage.getItem('videos') == null) {
          this.data1().then(function (data) {
            _this4.result = data.valueOf();
            console.log(_this4.result.videos);
            _this4.filtrei = _this4.result.videos;
          });
        } else {
          this.filtrei = JSON.parse(localStorage.getItem('videos'));
          console.log(this.filtrei);
          this.filtrai = this.filtrei;
        }

        this.divisions = JSON.parse(localStorage.getItem('divisions'));
        this.division = this.divisions.sort(function (A, B) {
          return A.Descripcion_de_Division - B.Descripcion_de_Division;
        });
        console.log(this.division);
      }

      _createClass(ListComponent, [{
        key: "info",
        value: function info(items) {
          var dialogRef = this.dialog.open(_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"], {
            height: '100%',
            width: '100%',
            data: {
              Pais: items.Pais,
              Codigo_de_Division: items.Codigo_de_Division,
              Nombre_del_video: items.Nombre_del_video,
              division_description: items.division_description,
              Description: items.Description,
              Root: items.Root,
              URL: items.URL,
              usuario: this.usuario.Nombre_del_representa,
              mudId: this.usuario.MudId,
              disclaimer: items.disclaimer,
              area_terapeutica: items.area_terapeutica,
              link_produto: items.link_produto,
              info_txt: items.info_txt
            }
          }); // console.log(items)

          /*
                      diemsiones
               - Video
               - Mudid
               - Country
               - Therapy Area
                      Metricas
                      - % video visto
               - tiempo de vido visto
                 */

          localStorage.removeItem('percentual');
        }
      }, {
        key: "data1",
        value: function data1() {
          var _this5 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this5.http.get('https://gskvideolib.azure-api.net/videos').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this5.videos = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "data2",
        value: function data2() {
          var _this6 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this6.http.get('https://gskvideolib.azure-api.net/division').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this6.videos = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "home",
        value: function home() {
          this.router.navigateByUrl('/home');
        }
      }, {
        key: "filtro",
        value: function filtro(codigo) {
          var _this7 = this;

          var videos = this.filtrei;
          console.log(videos);
          this.tag = videos.filter(function (i) {
            return String(i.tags).indexOf(_this7.uname.nativeElement.value) >= 0;
          });
          this.area = videos.filter(function (i) {
            return String(i.area_terapeutica).indexOf(_this7.uname.nativeElement.value) >= 0;
          });
          console.log("Resultado em tag" + JSON.stringify(this.tag));
          console.log("Rsultado em area" + JSON.stringify(this.area));

          if (JSON.stringify(this.area) == '[]') {
            this.filtrai = this.tag;

            if (JSON.stringify(this.tag) == '[]') {
              this.filtrai = this.area;
            }
          } else {
            this.filtrai = videos.filter(function (i) {
              return String(i.tags).indexOf(_this7.uname.nativeElement.value) >= 0;
            }) && videos.filter(function (i) {
              return String(i.area_terapeutica).indexOf(_this7.uname.nativeElement.value) >= 0;
            });
            console.log("tem os dois" + this.filtrai);
          }

          console.log(codigo);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      viewQuery: function ListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultado = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uname = _t.first);
        }
      },
      decls: 38,
      vars: 4,
      consts: [["color", "#dac84c"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["gsk1", "", "type", "button", 1, "btn", "btn-light", 3, "matMenuTriggerFor"], [1, "fas", "fa-bars"], [2, "border-left", "2px solid white", "margin-left", "1%", "height", "50px"], ["src", "/assets/gsk_branco.png"], [1, "example-fill-remaining-space"], [2, "margin-top", "18px", "margin-bottom", "1rem", "margin-right", "15px"], [1, "transparent-card"], [2, "text-align-last", "center", "color", "white", "margin-top", "5%"], [2, "color", "#8c8c8c", "font-size", "medium", "font-style", "italic"], [2, "text-align", "center !important"], ["id", "passcode", "placeholder", "Search", "aria-describedby", "search", 1, "form-control", 2, "border-radius", "25px", "width", "75%", "margin-top", "5%", "margin-left", "auto", "text-align", "center", "margin-right", "auto", "box-shadow", "3px 3px #cecdcd"], ["passcode", ""], ["type", "button", "id", "uname", 1, "btn", "btn-dark", 3, "value", "click"], ["uname", ""], [1, "container", 2, "text-align", "-webkit-center"], [1, "row"], [1, "col-xl"], [1, "list-group"], ["style", "list-style-type: none;", 4, "ngFor", "ngForOf"], [1, "navbar", "sticky-bottom", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], [2, "list-style-type", "none"], ["class", "card card-videos", "style", "width:100%; margin-right: 5px; height: auto; ", 4, "ngIf"], [1, "card", "card-videos", 2, "width", "100%", "margin-right", "5px", "height", "auto"], [1, "card-body"], [1, "col-sm"], ["id", "mainVideo", "width", "100%", "height", "auto", "nocontrols", "", "preload", "yes", 2, "border", "2px solid black"], ["autostart", "false", "type", "video/mp4", 3, "src"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-right", "3%", 3, "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_3_listener($event) {
            return ctx.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_5_listener($event) {
            return ctx.videos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V\xEDdeos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Menu\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Find the right video for you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search by Division Code or Tags.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-subtitle", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_27_listener($event) {
            return ctx.filtro(ctx.divisions.Codigo_de_Division);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListComponent_li_34_Template, 2, 1, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "GSK - GlaxoSmithKline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ol\xE1, ", ctx.usuario.Nombre_del_representa, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.divisions.Codigo_de_Division);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtrai);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_secure_url_pipe__WEBPACK_IMPORTED_MODULE_9__["SecureUrlPipe"]],
      styles: [".transparent-card[_ngcontent-%COMP%] {\n  height: 45% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcVXNlcnNcXGN0Mjk3MTU0XFxPbmVEcml2ZSAtIEdTS1xcRGVza3RvcFxcQ2Fpb0RFVkxvY2FsXFx2aWRlb0xpYi9zcmNcXGFwcFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csc0JBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVudC1jYXJke1xyXG5cdFx0XHRoZWlnaHQ6NDUlICFpbXBvcnRhbnQ7XHJcblxyXG59IiwiLnRyYW5zcGFyZW50LWNhcmQge1xuICBoZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        resultado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['uname']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"]]
        }],
        uname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['passcode']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-connection-service */
    "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");
    /* harmony import */


    var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../db.service */
    "./src/app/db.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var _c0 = ["passcode"];

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, connectionService, db, http) {
        var _this8 = this;

        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.connectionService = connectionService;
        this.db = db;
        this.http = http;
        this.user = {};
        this.result = [];
        this.result2 = [];
        this.result3 = [];
        this.result4 = [];
        this.status = '';
        this.users = [];
        this.usuario = [];
        this.produtos = [];
        this.divisions = [];
        this.divisoes = [];
        this.videos = [];
        this.shouldDisable = true;
        this.curSec = 0;
        this.showLoading = false; //30 seconds

        setTimeout(function (x) {
          _this8.shouldDisable = false;
          _this8.showLoading = true;
        }, 2000);
        this.connectionService.monitor().subscribe(function (connect) {
          _this8.status = connect ? 'internet ativa' : 'internet desativada';
          console.log(_this8.status);
        });

        if (localStorage.getItem('users') == null) {
          this.data().then(function (data) {
            _this8.result = data.valueOf();
            console.log(_this8.result.users[0].MUD_ID);
            _this8.users = _this8.result.users;
            localStorage.setItem('users', JSON.stringify(_this8.users));
          });
        } else {
          this.users = JSON.parse(localStorage.getItem('users'));
          console.log(this.users);
        }

        if (localStorage.getItem('divisions') == null) {
          this.data2().then(function (data) {
            _this8.result2 = data.valueOf();
            console.log(_this8.result2.division);
            _this8.divisions = _this8.result2.division.sort(function (A, B) {
              return A.Descripcion_de_Division - B.Descripcion_de_Division;
            });
            localStorage.setItem('divisions', JSON.stringify(_this8.divisions));
          });
        } else {
          this.divisions = JSON.parse(localStorage.getItem('divisions'));
          console.log(this.divisions);
        }

        if (localStorage.getItem('videos') == null) {
          this.data3().then(function (data) {
            _this8.result3 = data.valueOf();
            console.log(_this8.result3.videos);
            _this8.videos = _this8.result3.videos;
            localStorage.setItem('videos', JSON.stringify(_this8.videos));
          });
        } else {
          this.videos = JSON.parse(localStorage.getItem('videos'));
          console.log(this.videos);
        }

        if (localStorage.getItem('produtos') == null) {
          this.data4().then(function (data) {
            _this8.result4 = data.valueOf();
            console.log(_this8.result4.produtos);
            _this8.produtos = _this8.result4.produtos;
            localStorage.setItem('produtos', JSON.stringify(_this8.produtos));
          });
        } else {
          this.produtos = JSON.parse(localStorage.getItem('produtos'));
          console.log(this.produtos);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "entrar",
        value: function entrar() {
          var _this9 = this;

          // .toUpperCase() lembrar de usar quando atualizar o banco verdadeiro
          console.log(this.uname.nativeElement.value);

          if (this.users.find(function (i) {
            return i.MudId.toUpperCase() === _this9.uname.nativeElement.value.toUpperCase();
          })) {
            this.usuario = this.users.find(function (i) {
              return i.MudId.toUpperCase() === _this9.uname.nativeElement.value.toUpperCase();
            });
            console.log(this.usuario);
            localStorage.setItem('user', JSON.stringify(this.usuario));
            this.router.navigateByUrl('/home');
            localStorage.setItem('division', JSON.stringify(this.usuario.Codigo_de_Division));
            console.log('foi');
          } else {
            console.log('mentira');
          }
        }
      }, {
        key: "data",
        value: function data() {
          var _this10 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this10.http.get('https://gskvideolib.azure-api.net/users').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this10.users = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "data2",
        value: function data2() {
          var _this11 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this11.http.get('https://gskvideolib.azure-api.net/division').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this11.divisoes = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "data3",
        value: function data3() {
          var _this12 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this12.http.get('https://gskvideolib.azure-api.net/videos').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this12.videos = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "data4",
        value: function data4() {
          var _this13 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'
          });
          return new Promise(function (resolve) {
            _this13.http.get('https://gskvideolib.azure-api.net/produtos').subscribe(function (data) {
              resolve(data);
              console.log(data);
              _this13.produtos = data;
            }, function (err) {
              console.log(err);
            });
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uname = _t.first);
        }
      },
      decls: 18,
      vars: 2,
      consts: [[3, "hidden"], ["mode", "indeterminate"], [1, "card", 2, "width", "30rem", "margin-left", "auto", "margin-right", "auto", "margin-bottom", "15%", "margin-top", "15%"], [1, "card-body"], ["src", " /assets/gsk.png", 2, "max-width", "18%"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "form-group"], ["for", "exampleInputEmail1"], ["id", "passcode", "aria-describedby", "emailHelp", 1, "form-control"], ["passcode", ""], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "submit", "id", "btn-entrar", 1, "btn", "btn-primary", 3, "disabled", "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GSK VideoLIB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Assista aos v\xEDdeos da GSK pela nossa plataforma. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "MudID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener($event) {
            return ctx.entrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.shouldDisable);
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]
        }, {
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        uname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['passcode']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/secure-url.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/secure-url.pipe.ts ***!
    \************************************/

  /*! exports provided: SecureUrlPipe */

  /***/
  function srcAppSecureUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecureUrlPipe", function () {
      return SecureUrlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SecureUrlPipe =
    /*#__PURE__*/
    function () {
      function SecureUrlPipe(sanitizer) {
        _classCallCheck(this, SecureUrlPipe);

        this.sanitizer = sanitizer;
        this.sanitizer = sanitizer;
      }

      _createClass(SecureUrlPipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SecureUrlPipe;
    }();

    SecureUrlPipe.ɵfac = function SecureUrlPipe_Factory(t) {
      return new (t || SecureUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SecureUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "secureUrl",
      type: SecureUrlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'secureUrl'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/unique.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/unique.pipe.ts ***!
    \********************************/

  /*! exports provided: UniquePipe */

  /***/
  function srcAppUniquePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniquePipe", function () {
      return UniquePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UniquePipe =
    /*#__PURE__*/
    function () {
      function UniquePipe() {
        _classCallCheck(this, UniquePipe);
      }

      _createClass(UniquePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value !== undefined && value !== null) {
            return _.uniqBy(value, 'division_description');
          }

          return value;
        }
      }]);

      return UniquePipe;
    }();

    UniquePipe.ɵfac = function UniquePipe_Factory(t) {
      return new (t || UniquePipe)();
    };

    UniquePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "unique",
      type: UniquePipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniquePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'unique',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/video/video.component.ts":
  /*!******************************************!*\
    !*** ./src/app/video/video.component.ts ***!
    \******************************************/

  /*! exports provided: VideoComponent */

  /***/
  function srcAppVideoVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
      return VideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var ng_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-google-analytics */
    "./node_modules/ng-google-analytics/__ivy_ngcc__/fesm2015/ng-google-analytics.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _secure_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../secure-url.pipe */
    "./src/app/secure-url.pipe.ts");

    var VideoComponent =
    /*#__PURE__*/
    function () {
      function VideoComponent(dialogRef, data, dialog, googleAnalyticsService, http) {
        _classCallCheck(this, VideoComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.googleAnalyticsService = googleAnalyticsService;
        this.http = http;
        this.views = [];
        this.usuarioView = [];
        this.dadoOffline = [];
        this.Offline = [];
        var mainVideo = document.getElementById('mainVideo'); //console.log(this.views)
        //console.log(mainVideo)
        //console.log(dialogRef.componentInstance.data)
        //console.log(this.percentual)

        setTimeout(function () {
          this.views = JSON.parse(localStorage.getItem('video'));
          console.log(this.views);
        }, 500);
        var date = new Date();
        this.date = date.getDate() + '/' + date.getUTCMonth() + '/' + date.getFullYear();
        console.log(this.date);
      }

      _createClass(VideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pause",
        value: function pause() {}
      }, {
        key: "close",
        value: function close() {
          this.views = JSON.parse(localStorage.getItem('video'));
          console.log(this.views);
          this.dialogRef.close('Pizza!'); // area terapeutica do video no analytics
          //calculo de porcentagem
          //

          this.percentage = localStorage.getItem('percentual');
          /*
                 this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video + ';'+
                   'Pais:'+ this.views.Pais, 'Area_Terapeutica:'+
                   this.views.area_terapeutica, 'User:' +
                   this.views.usuario + '; ' + 'Mud ID:' + this.views.mudId + ';' + 'Date:' + this.date , Number(this.percentage))
            */

          if (this.percentage > 0) {
            this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video + ' ; ' + this.views.Pais, this.percentage + '%' + ' ; ' + this.duration + ' ; ' + this.fullTime, this.views.mudId + ' ; ' + this.views.usuario + ' ; ' + this.views.area_terapeutica); // console.log(Number(this.percentage))     

            console.log(this.views.Nombre_del_video);
            localStorage.clear();
          } else {
            console.log("0 percentage");
          }
        }
        /* downloadFile(data: Response) {
           const blob = new Blob(this.views.URL, { type: '.mp4' });
           const url= window.URL.createObjectURL(blob);
           window.open(url);
         }*/

      }, {
        key: "setCurrentTime",
        value: function setCurrentTime(data) {
          var mainVideo = document.getElementById('mainVideo');
          this.percentual = Math.round(data.target.currentTime / data.target.duration * 100);
          this.currentTime = data.target.currentTime; // console.log(this.currentTime)
          // console.log(data.target.duration)

          var Fminutes = Math.floor(data.target.duration / 60);
          var Fseconds = Math.floor(data.target.duration - Fminutes * 60);
          var minutes = Math.floor(this.currentTime / 60);
          var seconds = Math.floor(this.currentTime - minutes * 60);

          if (Fseconds < 10) {
            this.fullTime = Fminutes + ':0' + Fseconds;
          } else {
            this.fullTime = Fminutes + ':' + Fseconds;
          }

          if (seconds < 10) {
            var tempo = minutes + ':0' + seconds;
            this.duration = tempo;
          } else {
            var tempo = minutes + ':' + seconds;
            this.duration = tempo;
          } // console.log(this.fullTime)
          // console.log(tempo)


          this.timePercentual = localStorage.setItem('percentual', this.percentual.toString());

          if (this.timePercentual = !null) {} //console.log(this.timePercentual)
          // console.log(this.percentual)

        }
      }, {
        key: "info",
        value: function info(items) {
          var dialogRef = this.dialog.open(_info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"], {
            height: '100%',
            width: '100%',
            data: {
              info_txt: items.info_txt
            }
          });
          this.googleAnalyticsService.eventTracker("video", dialogRef.componentInstance.data.Nombre_del_video, dialogRef.componentInstance.data.usuario);
        }
      }]);

      return VideoComponent;
    }();

    VideoComponent.ɵfac = function VideoComponent_Factory(t) {
      return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_google_analytics__WEBPACK_IMPORTED_MODULE_3__["NgGoogleAnalyticsTracker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoComponent,
      selectors: [["app-video"]],
      decls: 22,
      vars: 9,
      consts: [["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "card-body"], [1, "cor-div"], [1, "embed-responsive", "embed-responsive-16by9"], ["id", "mainVideo", "onclick", "this.paused ? this.play() : this.pause();", "width", "320", "height", "240", "controls", "", "preload", "yes", "playsinline", "", 3, "timeupdate"], ["autostart", "true", "type", "", 3, "src"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [2, "font-size", "xx-small", "color", "gray"], ["target", "_blank", 2, "text-decoration", "none", 3, "href"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-right", "3%"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]],
      template: function VideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_0_listener($event) {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function VideoComponent_Template_video_timeupdate_5_listener($event) {
            return ctx.setCurrentTime($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "secureUrl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_20_listener($event) {
            return ctx.info(ctx.data);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.data.URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.Nombre_del_video);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.data.Codigo_de_Division, " | ", ctx.data.area_terapeutica, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.Description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.disclaimer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.data.link_produto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      pipes: [_secure_url_pipe__WEBPACK_IMPORTED_MODULE_5__["SecureUrlPipe"]],
      styles: ["video[_ngcontent-%COMP%]::-webkit-media-controls-fullscreen-button {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFxjdDI5NzE1NFxcT25lRHJpdmUgLSBHU0tcXERlc2t0b3BcXENhaW9ERVZMb2NhbFxcdmlkZW9MaWIvc3JjXFxhcHBcXHZpZGVvXFx2aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx3QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1mdWxsc2NyZWVuLWJ1dHRvblxyXG57XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59IiwidmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtZnVsbHNjcmVlbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video',
          templateUrl: './video.component.html',
          styleUrls: ['./video.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: ng_google_analytics__WEBPACK_IMPORTED_MODULE_3__["NgGoogleAnalyticsTracker"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ct297154\OneDrive - GSK\Desktop\CaioDEVLocal\videoLib\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map