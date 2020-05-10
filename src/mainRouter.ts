import express from "express";
import { BetRouter } from "./bets/betRouter";
import { AppRouter } from "./common/AppRouter";
import { ProjectsRouter } from "./projects/projectsRouter";
import { SecurityRouter } from "./security/securityRouter";


// root router for the API

export class MainRouter extends AppRouter {
    constructor() {super(); }

    // adds the child routers to various paths to form the overall API.
    public setupRoutes(): void {
        this.addRouter("/security", new SecurityRouter());
        this.addRouter("/projects", new ProjectsRouter());
        this.addRouter("/bets", new BetRouter());
    }

}
