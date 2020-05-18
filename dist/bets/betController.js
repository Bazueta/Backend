"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoDB_1 = require("../common/MongoDB");
var config_1 = require("../config");
var betModel_1 = require("./betModel");
var BetController = /** @class */ (function () {
    function BetController() {
    }
    BetController.prototype.getBets = function (req, res) {
        BetController.db.getRecords(BetController.betTable)
            .then(function (results) { return res.send({ fn: "getBets", status: "success", data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    BetController.prototype.getBet = function (req, res) {
        var title = req.params.title;
        var id = MongoDB_1.Database.stringToId(req.params.id);
        BetController.db.getOneRecord(BetController.betTable, { title: title, _id: id })
            .then(function (results) { return res.send({ fn: "getBet", status: "success", data: results }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    BetController.prototype.postBet = function (req, res) {
        var bet = betModel_1.BetModel.fromObject(req.body);
        BetController.db.addRecord(BetController.betTable, bet.toObject())
            .then(function (result) { return res.send({ fn: "postBet", status: "success" }).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    BetController.prototype.putBet = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        var data = req.body;
        delete data.authUser;
        BetController.db.updateRecord(BetController.betTable, { _id: id }, { $set: req.body })
            .then(function (results) { return results ? (res.send({ fn: "putBet", status: "success" })) : (res.send({ fn: "joinBet", status: "failure", data: "Not found" })).end(); })
            .catch(function (err) { return res.send({ fn: "putBet", status: "failure", data: err }).end(); });
    };
    BetController.prototype.deleteBet = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        BetController.db.deleteRecord(BetController.betTable, { _id: id })
            .then(function (results) { return results ? (res.send({ fn: "deleteBet", status: "success" })) : (res.send({ fn: "deleteBet", status: "failure", data: "Not found" })).end(); })
            .catch(function (reason) { return res.status(500).send(reason).end(); });
    };
    BetController.prototype.joinBet = function (req, res) {
        var id = MongoDB_1.Database.stringToId(req.params.id);
        var userBets = req.body.userBets;
        delete userBets.authUser;
        BetController.db.updateRecord(BetController.betTable, { _id: id }, { $push: req.body })
            .then(function (results) { return results ? (res.send({ fn: "joinBet", status: "success" })) : (res.send({ fn: "joinBet", status: "failure", data: "Not found" })).end(); })
            .catch(function (err) { return res.send({ fn: "joinBet", status: "failure", data: err }).end(); });
    };
    BetController.db = new MongoDB_1.Database(config_1.Config.url, "bets");
    BetController.betTable = "bets";
    return BetController;
}());
exports.BetController = BetController;
//# sourceMappingURL=betController.js.map