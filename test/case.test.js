import assert from 'assert';
import { snakecase, camelcase, kebabcase } from '../src/case';

describe('snakecase', function () {
  it('normal', function () {
    assert.strictEqual(snakecase('AaaBbbCcc'), 'aaa_bbb_ccc');
    assert.strictEqual(snakecase('aaaBbbCcc'), 'aaa_bbb_ccc');
    assert.strictEqual(snakecase('aaa-bbb-ccc'), 'aaa_bbb_ccc');
    assert.strictEqual(snakecase('aaa_bbb_ccc'), 'aaa_bbb_ccc');
    assert.strictEqual(snakecase('Aaa--_BbbCcc'), 'aaa_bbb_ccc');
    assert.strictEqual(snakecase('AABB'), 'a_a_b_b');
    assert.strictEqual(snakecase('AA--_B__-B'), 'a_a_b_b');
  });
});

describe('camelcase', function () {
  it('normal', function () {
    assert.strictEqual(camelcase('aaa_bbb_ccc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('aaa-bbb-ccc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('aaa-bbb_ccc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('aaaBbbCcc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('AaaBbbCcc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('aaa--_bbb_-_ccc'), 'aaaBbbCcc');
    assert.strictEqual(camelcase('Aaa--_bBb_-_ccc'), 'aaaBBbCcc');
    assert.strictEqual(camelcase('aaa_bbb_ccc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('aaa-bbb-ccc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('aaa-bbb_ccc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('aaaBbbCcc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('AaaBbbCcc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('aaa--_bbb_-_ccc', true), 'AaaBbbCcc');
    assert.strictEqual(camelcase('Aaa--_bBb_-_ccc', true), 'AaaBBbCcc');
  });
});

describe('kebabcase', function () {
  it('normal', function () {
    assert.strictEqual(kebabcase('AaaBbbCcc'), 'aaa-bbb-ccc');
    assert.strictEqual(kebabcase('aaaBbbCcc'), 'aaa-bbb-ccc');
    assert.strictEqual(kebabcase('aaa_bbb_ccc'), 'aaa-bbb-ccc');
    assert.strictEqual(kebabcase('aaa-bbb-ccc'), 'aaa-bbb-ccc');
    assert.strictEqual(kebabcase('Aaa--_BbbCcc'), 'aaa-bbb-ccc');
    assert.strictEqual(kebabcase('AABB'), 'a-a-b-b');
    assert.strictEqual(kebabcase('AA--_B__-B'), 'a-a-b-b');
  });
});
