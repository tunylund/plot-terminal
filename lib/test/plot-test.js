"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("./test-utils");
const plot_1 = require("../src/plot");
describe('plot', function () {
    it('should return empty for no data', () => {
        test_utils_1.assertStr(plot_1.default([]), ``);
    });
    it('should return empty for no data and a title', () => {
        test_utils_1.assertStr(plot_1.default([], 'title'), ``);
    });
    it('should plot a 1 datapoint graph', () => {
        test_utils_1.assertStr(plot_1.default([{ x: 0, y: 0 }], 'title'), '   title\n' +
            '   |    \n' +
            ' 0 *----\n' +
            '   0    ');
    });
    it('should plot a small chart', () => {
        test_utils_1.assertStr(plot_1.default([
            { x: 0, y: 0 },
            { x: 1, y: 1 }
        ], 'title'), '   title\n' +
            '   |         \n' +
            ' 1 |    *    \n' +
            ' 0 *----^----\n' +
            '   0    1    ');
    });
    it.only('should plot a large chart', () => {
        test_utils_1.assertStr(plot_1.default([
            { x: 1 / 5, y: 5 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 1 },
            { x: 4, y: 1 }
        ], 'min J(θ)'), '   min J(θ)\n' +
            '   |                        \n' +
            ' 5 *                        \n' +
            ' 4 |                        \n' +
            ' 3 |   *                    \n' +
            ' 2 |        *               \n' +
            ' 1 `----^----^---*^---*^----\n' +
            '   0.2  1.2  2.2  3.2  4.2  ');
    });
});
