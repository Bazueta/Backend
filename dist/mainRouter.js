"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var betRouter_1 = require("./bets/betRouter");
var AppRouter_1 = require("./common/AppRouter");
var projectsRouter_1 = require("./projects/projectsRouter");
var securityRouter_1 = require("./security/securityRouter");
// root router for the API
var MainRouter = /** @class */ (function (_super) {
    __extends(MainRouter, _super);
    function MainRouter() {
        return _super.call(this) || this;
    }
    // adds the child routers to various paths to form the overall API.
    MainRouter.prototype.setupRoutes = function () {
        this.addRouter("/security", new securityRouter_1.SecurityRouter());
        this.addRouter("/projects", new projectsRouter_1.ProjectsRouter());
        this.addRouter("/bets", new betRouter_1.BetRouter());
    };
    return MainRouter;
}(AppRouter_1.AppRouter));
exports.MainRouter = MainRouter;
//# sourceMappingURL=mainRouter.js.map