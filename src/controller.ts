import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public getMemes(req: express.Request, res: express.Response): void {
        res.send("these are your memes boy");
    }
}
