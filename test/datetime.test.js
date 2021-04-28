import assert from 'assert';
import { date2Timestamp, timestampFormat, getWeeks } from '../src/datetime';

describe('date2Timestamp', function () {
  it('normal', function () {
    assert.strictEqual(date2Timestamp('2021-01-01'), 1609430400);
    assert.strictEqual(date2Timestamp('2021-01-01', 'ms'), 1609430400000);
  });
  it('abnormal', function () {
    assert.strictEqual(date2Timestamp(null), null);
    assert.strictEqual(date2Timestamp(undefined), null);
  });
});

describe('timestampFormat', function () {
  it('normal', function () {
    assert.strictEqual(timestampFormat(1609430400), '2021-01-01 00:00:00');
    assert.strictEqual(timestampFormat(1609430400000, null, 'ms'), '2021-01-01 00:00:00');
    assert.strictEqual(timestampFormat(1609430400, 'yyyy-MM-dd'), '2021-01-01');
    assert.strictEqual(timestampFormat(1609430400, 'MM-dd'), '01-01');
  });
  it('abnormal', function () {
    assert.strictEqual(timestampFormat(null), '--');
    assert.strictEqual(timestampFormat(undefined), '--');
  });
});

describe('getWeeks', function () {
  it('normal', function () {
    assert.strictEqual(getWeeks('2021-01-01'), 1);
    assert.strictEqual(getWeeks('2021-01-04'), 2);
    assert.strictEqual(getWeeks('2021-04-28'), 18);
    assert.strictEqual(getWeeks(new Date('2021-01-01')), 1);
    assert.strictEqual(getWeeks(), getWeeks(new Date()));
  });
});
