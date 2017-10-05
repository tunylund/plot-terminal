"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("./test-utils");
const x_axis_1 = require("./../src/x-axis");
describe('x-axis', function () {
    it('should return nothing for no values', () => {
        test_utils_1.assertStr(x_axis_1.default([]), ``);
    });
    it('should return something for some values', () => {
        test_utils_1.assertStr(x_axis_1.default([{ x: 0, y: 0 }]), '`----\n0');
    });
    it('should return more axis with more values', () => {
        test_utils_1.assertStr(x_axis_1.default([
            { x: 0, y: 0 },
            { x: 1, y: 0 }
        ]), '`----^----\n' +
            '0    1');
    });
    it('should multiline long values', () => {
        test_utils_1.assertStr(x_axis_1.default([
            { x: 1000, y: 0 },
            { x: 2000, y: 0 },
            { x: 3000, y: 0 },
            { x: 4000, y: 0 }
        ]), '`----^----^----^----\n' +
            '    1750      3250  \n' +
            '1000     2500  ');
    });
    it('should multiline longer values', () => {
        test_utils_1.assertStr(x_axis_1.default([
            { x: 1000000, y: 0 },
            { x: 2000000, y: 0 },
            { x: 3000000, y: 0 },
            { x: 4000000, y: 0 }
        ]), '`----^----^----^----\n' +
            '  1750000   3250000 \n' +
            '1000~  2500000 ');
    });
});
