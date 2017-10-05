"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
function assertStr(actual, expected) {
    const a = actual.split('\n').map(r => `'${r}'`).join('\n');
    const e = expected.split('\n').map(r => `'${r}'`).join('\n');
    assert.equal(actual, expected, `\n${a}\n\ndoes not match\n\n${e}\n`);
}
exports.assertStr = assertStr;
