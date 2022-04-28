import assert from 'assert';
import { getWeeks } from '../src/datetime';

describe('getWeeks', function () {
  it('normal', function () {
    assert.strictEqual(getWeeks('2021-01-01'), 1);
    assert.strictEqual(getWeeks('2021-01-04'), 2);
    assert.strictEqual(getWeeks('2021-04-28'), 18);
    assert.strictEqual(getWeeks(new Date('2021-01-01')), 1);
    assert.strictEqual(getWeeks(), getWeeks(new Date()));
  });
});
