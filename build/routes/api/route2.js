"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route2 = express_1.default.Router();
route2.get('/', function (req, res) {
    res.send('Route 2');
});
exports.default = route2;
