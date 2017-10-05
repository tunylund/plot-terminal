"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function times(x, thing) {
    return new Array(x).fill(thing || '');
}
function rows(str) {
    return str.split('\n');
}
function leftPad(str, pad) {
    return rows(str).map(r => r.padStart(pad + r.length)).join('\n');
}
function bottomPad(str, pad) {
    const max = maxX(str);
    return rows(str)
        .concat(times(pad).map(r => r.padStart(max)))
        .join('\n');
}
function maxX(str) {
    return rows(str).reduce((memo, row) => memo > row.length ? memo : row.length, 0);
}
function makeSquareV(str, yLength) {
    const xLength = maxX(str);
    const pad = yLength - rows(str).length;
    return times(pad).map(r => r.padStart(xLength)).concat(rows(str)).join('\n');
}
function makeSquareH(str, xLength) {
    return rows(str).map(row => row.padEnd(xLength)).join('\n');
}
function chars(str) {
    return rows(str).map(row => row.split(''));
}
function union(a, b) {
    return times(a.length, ' ')
        .map((x, ix) => b[ix] !== ' ' ? b[ix] : a[ix]);
}
function overlay(a, b, offsetX = 0, offsetY = 0) {
    const squarePaddedA = bottomPad(leftPad(makeSquareH(a, maxX(a)), offsetX < 0 ? -offsetX : 0), offsetY < 0 ? -offsetY : 0);
    const squarePaddedB = bottomPad(leftPad(makeSquareH(b, maxX(b)), offsetX > 0 ? offsetX : 0), offsetY > 0 ? offsetY : 0);
    const xLength = Math.max(maxX(squarePaddedA), maxX(squarePaddedB));
    const yLength = Math.max(rows(squarePaddedA).length, rows(squarePaddedB).length);
    const sameSizedA = makeSquareV(makeSquareH(squarePaddedA, xLength), yLength);
    const sameSizedB = makeSquareV(makeSquareH(squarePaddedB, xLength), yLength);
    const ac = chars(sameSizedA);
    const bc = chars(sameSizedB);
    const unionm = ac.map((row, iy) => union(row, bc[iy]));
    return unionm.map(row => row.join('')).join('\n');
}
exports.default = overlay;
