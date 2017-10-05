"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("./test-utils");
const y_axis_1 = require("../src/y-axis");
describe('y-axis', function () {
    it('should return nothing for no data', () => {
        test_utils_1.assertStr(y_axis_1.default([]), ``);
    });
    it('should return an axis for 1 data', () => {
        test_utils_1.assertStr(y_axis_1.default([{ x: 0, y: 0 }]), `   |\n 0 |`);
    });
    it('should return an axis for several data', () => {
        test_utils_1.assertStr(y_axis_1.default([
            { x: 0, y: 1 },
            { x: 0, y: 2 }
        ]), `   |\n 2 |\n 1 |`);
    });
    it('should left pad long values', () => {
        test_utils_1.assertStr(y_axis_1.default([
            { x: 0, y: 20 },
            { x: 0, y: 2 }
        ]), `    |\n 12 |\n  2 |`);
    });
});
