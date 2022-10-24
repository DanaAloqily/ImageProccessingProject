"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.url;
    console.log(" ".concat(url, " was visited")); //checking if image already exist
    next();
};
exports.default = logger;
