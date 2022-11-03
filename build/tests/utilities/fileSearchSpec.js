"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileSearch_1 = __importDefault(require("../../utilities/fileSearch"));
describe('Testing the fileExists function', function () {
    it('testing the fileExists function with non-existing file', function () {
        expect((0, fileSearch_1.default)('invalid path')).toBeFalsy();
    });
});
