"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(values) {
    return Math.max(...values) - Math.min(...values);
}
function makeCanvas(points) {
    const size = points.length;
    const space = ' '.charCodeAt(0);
    return new Array(size).fill('').map(y => {
        return new Array(size).fill('').map(x => {
            return new Array(5).fill(space);
        });
    });
}
function placeMarks(canvas, points) {
    const y = points.map(p => p.y);
    const ymin = Math.min(...y);
    const yscale = range(y) / (range([1, points.length]) || 1);
    const x = points.map(p => p.x);
    const xmin = Math.min(...x);
    const xscale = range(x) / (range([1, points.length]) || 1);
    const mark = '*'.charCodeAt(0);
    points.forEach(p => {
        const y = Math.round((p.y - ymin) * yscale);
        const x = (p.x - xmin) * xscale;
        const xa = Math.floor(x);
        const xb = Math.floor(x % 1 * 5);
        canvas[y][xa][xb] = mark;
    });
    return canvas;
}
function render(canvas) {
    return canvas.reverse().map(row => {
        return row.map((portion) => {
            return portion.map(x => String.fromCharCode(x)).join('');
        }).join('');
    }).join('\n').replace(/ +$/gm, '');
}
function graph(points) {
    return render(placeMarks(makeCanvas(points), points));
}
exports.default = graph;
