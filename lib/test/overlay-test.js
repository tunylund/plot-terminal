"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overlay_1 = require("../src/overlay");
const test_utils_1 = require("./test-utils");
describe('overlay', function () {
    it('should return empty when empty params', () => {
        test_utils_1.assertStr(overlay_1.default('', ''), '');
    });
    it('should return empty when empty params', () => {
        test_utils_1.assertStr(overlay_1.default('', ''), '');
    });
    it('should return combined string', () => {
        test_utils_1.assertStr(overlay_1.default(`a`, `b`), `b`);
    });
    it('should return ignore spaces in b', () => {
        test_utils_1.assertStr(overlay_1.default(`a\naa`, ` b\n  `), `ab\naa`);
    });
    it('should account padding', () => {
        test_utils_1.assertStr(overlay_1.default(`a\naa`, `b`, 1, 1), `ab\naa`);
    });
    it('should account more padding', () => {
        test_utils_1.assertStr(overlay_1.default(`aa\naa`, `b`, 2, 2), `  b\naa \naa `);
    });
    it('should account negative padding', () => {
        test_utils_1.assertStr(overlay_1.default(`aa\naa`, `b`, -1, -1), ` aa\n aa\nb  `);
    });
    it('should account negative padding when b is larger', () => {
        test_utils_1.assertStr(overlay_1.default(`a`, ` b\n b`, 0, -1), `ab\n b`);
    });
    it('should overlay axes', () => {
        test_utils_1.assertStr(overlay_1.default('   |\n' +
            ' 0 |', '`----\n' +
            '0', 3, -1), '   |    \n' +
            ' 0 `----\n' +
            '   0    ');
    });
});
