"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const y_axis_1 = require("./y-axis");
const x_axis_1 = require("./x-axis");
const overlay_1 = require("./overlay");
const graph_1 = require("./graph");
function plot(points, title) {
    const y = y_axis_1.default(points);
    const x = x_axis_1.default(points);
    const values = graph_1.default(points);
    const leftPad = y.split('\n').reduce((memo, line) => line.includes('|') ? line.indexOf('|') : memo, 0);
    const bottomPad = x === '' ? 0 : (x.split('\n').length - 1) * -1;
    const paddedTitle = title ? title.padStart(title.length + leftPad) + '\n' : '';
    const base = overlay_1.default(y, x, leftPad, bottomPad);
    const result = overlay_1.default(base, values, leftPad, -bottomPad);
    return points.length === 0 ? '' : paddedTitle + result;
}
exports.default = plot;
