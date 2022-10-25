"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var fileExists = function (imageLocation) {
    return (0, fs_1.existsSync)(imageLocation); // return whether or not the file exists synchronously
};
exports.default = fileExists;
