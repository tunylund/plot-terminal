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
    const yWidth = y.split('\n').reduce((memo, line) => line.includes('|') ? line.indexOf('|') : memo, 0);
    const xHeight = x === '' ? 0 : x.split('/n').length;
    const paddedTitle = title ? title.padStart(title.length + yWidth) + '\n' : '';
    const base = overlay_1.default(y, x, yWidth, -xHeight);
    const result = overlay_1.default(base, values, yWidth, xHeight);
    return points.length === 0 ? '' : paddedTitle + result;
}
exports.default = plot;
