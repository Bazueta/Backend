"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BetModel = /** @class */ (function () {
    function BetModel() {
        this.id = "";
        this.title = "";
        this.description = "";
        this.creator = "";
        this.userBets = [];
        //public outcomes: string[] = [];
        this.created = "";
        this.cutoff = "";
    }
    BetModel.prototype.toObject = function () {
        return { title: this.title, description: this.description, creator: this.creator, userBets: this.userBets, created: this.created, cutoff: this.cutoff };
    };
    BetModel.fromObject = function (object) {
        var b = new BetModel();
        b.title = object.title;
        b.description = object.description;
        b.creator = object.creator;
        b.userBets = object.userBets;
        //b.outcomes = object.outcomes;
        b.created = object.created;
        b.cutoff = object.cutoff;
        return b;
    };
    return BetModel;
}());
exports.BetModel = BetModel;
//# sourceMappingURL=betModel.js.map