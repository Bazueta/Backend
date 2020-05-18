import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { BetController } from "./betController";

export class BetRouter extends AppRouter {
    public static betController: BetController = new BetController();
    constructor() {super(); }

    public setupRoutes(): void {
        this.expressRouter.get("/", BetRouter.betController.getBets);
        this.expressRouter.get("/:title/:id", BetRouter.betController.getBet);
        this.expressRouter.post("/", BetRouter.betController.postBet);
        this.expressRouter.put("/:id", BetRouter.betController.putBet);
        this.expressRouter.delete("/:title/:id", BetRouter.betController.deleteBet);
        this.expressRouter.put("/:title/:id", BetRouter.betController.joinBet);
    }
}