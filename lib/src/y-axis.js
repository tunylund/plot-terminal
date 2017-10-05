"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function labels(values) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const step = Math.ceil(max / values.length);
    return new Array(values.length).fill(0).map((i, ix) => ix * step + min);
}
function yAxisLabels(points) {
    const yLabels = labels(points.map(p => p.y)).map(String);
    const maxLength = yLabels.reduce((m, l) => m < l.length ? l.length : m, 0);
    return yLabels.length === 0 ? yLabels : yLabels
        .concat([''])
        .map(l => l.padStart(maxLength, ' '));
}
function yAxis(points) {
    return yAxisLabels(points)
        .reverse()
        .map(label => ` ${label} |`)
        .join('\n');
}
exports.default = yAxis;
