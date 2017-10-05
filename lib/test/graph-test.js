"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("./test-utils");
const graph_1 = require("./../src/graph");
describe('graph', function () {
    it('should return nothing for no data', () => {
        test_utils_1.assertStr(graph_1.default([]), '');
    });
    it('should plot a 1 datapoint', () => {
        test_utils_1.assertStr(graph_1.default([{ x: 0, y: 0 }]), '*');
    });
    it('should plot a datapoint on y axis', () => {
        test_utils_1.assertStr(graph_1.default([
            { x: 0, y: 0 },
            { x: 0, y: 1 }
        ]), '*\n*');
    });
    it('should plot a datapoint on x axis', () => {
        test_utils_1.assertStr(graph_1.default([
            { x: 0, y: 0 },
            { x: 1, y: 0 }
        ]), '\n' +
            '*    *');
    });
    it('should plot a datapoint on x and y axises', () => {
        test_utils_1.assertStr(graph_1.default([
            { x: 0, y: 0 },
            { x: 1, y: 1 }
        ]), '     *\n' +
            '*');
    });
    it('should plot fractions', () => {
        test_utils_1.assertStr(graph_1.default([
            { x: 0, y: 0 },
            { x: 1.6, y: 1.4 },
            { x: 2, y: 2 }
        ]), '          *\n' +
            '        *\n' +
            '*');
    });
    it('should plot more graphs', () => {
        test_utils_1.assertStr(graph_1.default([
            { x: 1, y: 0 },
            { x: 10, y: 0 },
            { x: 50, y: 0 },
            { x: 100, y: 0 },
            { x: 200, y: 0 }
        ]), '\n' +
            '\n' +
            '\n' +
            '\n' +
            '*   *    *          *');
    });
});
