import { AppRouter } from "./../common/AppRouter";
import { SecurityMiddleware } from "./../security/securityMiddleware";
import { ProjectsModel } from "./../projects/projectsModel";
import { BetController } from "./betController";

export class BetRouter extends AppRouter {
    public static BetController: BetController = new BetController();
    constructor() {super(); }

    public setupRoutes(): void {
        this.expressRouter.get("/:title", BetRouter.BetController.getBets);
        this.expressRouter.get("/:title/:id", BetRouter.BetController.getBet);
        this.expressRouter.post("/", [SecurityMiddleware.RequireAuth], BetRouter.BetController.postBet);
        this.expressRouter.put("/:id", [SecurityMiddleware.RequireAuth], BetRouter.BetController.putBet);
        this.expressRouter.delete("/:id", [SecurityMiddleware.RequireAuth], BetRouter.BetController.deleteBet);
    }
}