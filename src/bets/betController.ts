import express, { RequestHandler } from "express";
import { Database } from "../common/MongoDB";
import { Config } from "../config";
import { BetModel } from "./betModel";

export class BetController {
    public static db: Database = new Database(Config.url, "bets");
    public static betTable = "bets";

    public getBets(req: express.Request, res: express.Response)  {

        BetController.db.getRecords(BetController.betTable)
            .then((results) => res.send({ fn: "getBets", status: "success", data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public getBet(req: express.Request, res: express.Response)  {
        const title = req.params.title;
        const id = Database.stringToId(req.params.id);
        BetController.db.getOneRecord(BetController.betTable, {title, _id: id})
            .then((results) => res.send({ fn: "getBet", status: "success", data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public postBet(req: express.Request, res: express.Response)  {
        const bet: BetModel = BetModel.fromObject(req.body);

        BetController.db.addRecord(BetController.betTable, bet.toObject())
            .then((result: boolean) => res.send({ fn: "postBet", status: "success"}).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public putBet(req: express.Request, res: express.Response)  {
        const id = Database.stringToId(req.params.id);
        const data = req.body;
        delete data.authUser;
        BetController.db.updateRecord(BetController.betTable, {_id: id}, {$set: req.body})
            .then((results) => results ? (res.send({ fn: "putBet", status: "success" })) : (res.send({ fn: "joinBet", status: "failure", data: "Not found" })).end())
            .catch((err) => res.send({ fn: "putBet", status: "failure", data: err }).end());
    }

    public deleteBet(req: express.Request, res: express.Response)  {
       const id = Database.stringToId(req.params.id);
       BetController.db.deleteRecord(BetController.betTable, {_id: id})
       .then((results) => results ? (res.send({ fn: "deleteBet", status: "success" })) : (res.send({ fn: "deleteBet", status: "failure", data: "Not found" })).end())
       .catch((reason) => res.status(500).send(reason).end());
    }

    public joinBet(req: express.Request, res: express.Response) {
        const id = Database.stringToId(req.params.id);
        const userBets = req.body.userBets;
        delete userBets.authUser;

        BetController.db.updateRecord(BetController.betTable, {_id: id}, {$push: req.body})
            .then((results) => results ? (res.send({ fn: "joinBet", status: "success" })) : (res.send({ fn: "joinBet", status: "failure", data: "Not found" })).end())
            .catch((err) => res.send({ fn: "joinBet", status: "failure", data: err }).end());
    }

    public getAmounts(req: express.Request, res: express.Response) {
        const id = Database.stringToId(req.params.id);
        const title = req.params.title;
        const betAmounts = req.params.betAmounts;
        BetController.db.getOneRecord(BetController.betTable, {title, _id: id})
            .then((results) => res.send({ fn: "getAmounts", status: "success", data: results.betAmounts }).end())
            .catch((reason) => res.status(500).send(reason).end());
        
    }

}
