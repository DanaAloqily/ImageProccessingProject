"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route1_1 = __importDefault(require("./api/route1"));
var route2_1 = __importDefault(require("./api/route2"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Main API Route');
});
routes.use('/route1', route1_1.default);
routes.use('/route2', route2_1.default);
exports.default = routes;
