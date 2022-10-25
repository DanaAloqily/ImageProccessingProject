"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../../middleware/resize"));
var ifExist_1 = __importDefault(require("../../middleware/ifExist"));
var resizeRoute = express_1.default.Router();
// endpoint goes through 2 middleware, one for checking if the image already exists, the second if not exist, resizes it.
resizeRoute.get('/', ifExist_1.default, resize_1.default, function (req, res) {
    res.status(200);
});
exports.default = resizeRoute;
