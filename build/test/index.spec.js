"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe('index.ts 테스트', () => {
    it('sum 테스트', () => {
        chai_1.expect(index_1.sum(1, 1)).to.equal(2);
        chai_1.expect(index_1.sum(1, 1)).to.not.equal('히히');
    });
});
