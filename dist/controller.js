"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.getHello = function (req, res) {
        res.send("Hello World");
    };
    Controller.prototype.postHello = function (req, res) {
        res.send(req.body);
    };
    Controller.prototype.getMemes = function (req, res) {
        res.send("these are your memes boy");
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map