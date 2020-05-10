import express, { RequestHandler } from "express";
import { Database } from "../common/MongoDB";
import { Config } from "../config";
import { BetModel } from "./betModel";

export class BetController {
    public static db: Database = new Database(Config.url, "bets");
    public static betTable = "bets";

    public getBets(req: express.Request, res: express.Response): void  {
        console.log(req.params.id);
    }

    public getBet(req: express.Request, res: express.Response): void  {
        console.log(req.params.id);
    }

    public postBet(req: express.Request, res: express.Response): void  {
        const bet: BetModel = BetModel.fromObject(req.body);
        console.log(req.params.id);
    }

    public putBet(req: express.Request, res: express.Response): void  {
        console.log(req.params.id);
    }

    public deleteBet(req: express.Request, res: express.Response): void  {
        console.log("deleted " + req.params.id);
    }
    
}