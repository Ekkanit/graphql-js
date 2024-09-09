"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPathArray = void 0;
/**
 * Build a string describing the path.
 */
function printPathArray(path) {
    return path
        .map((key) => typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key)
        .join('');
}
exports.printPathArray = printPathArray;
