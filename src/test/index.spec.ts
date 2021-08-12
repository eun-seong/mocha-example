import { expect } from 'chai';
import { Calculator } from '../index';

describe('Calculator 테스트', () => {
  it('add 테스트', () => {
    const calculator = new Calculator();

    expect(calculator.add(1, 1)).to.equal(2);
    expect(calculator.add(1, 1)).to.not.equal('히히');
  });
});
