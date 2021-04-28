import assert from 'assert';
import { obj2Query, copyByKey } from '../src/index.js';

describe('obj2Query', function () {
  it('normal', function () {
    assert.strictEqual(obj2Query({ index: 0, size: 15 }), 'index=0&size=15');
    assert.strictEqual(obj2Query({}), '');
  });

  it('abnormal', function () {
    assert.strictEqual(obj2Query([1,2]), '');
    assert.strictEqual(obj2Query(new Map()), '');
    assert.strictEqual(obj2Query(null), '');
  });
});

describe('copyByKey', function () {
  it('normal', function () {
    assert.deepStrictEqual(copyByKey({ key: 'i', value: 12 }, ['key']), { key: 'i' });
  });
  
  it('abnormal', function () {
    assert.deepStrictEqual(copyByKey({ key: 'i', value: 12 }, ['color']), { color: undefined });
    assert.deepStrictEqual(copyByKey({ key: 'i', value: 12 }, []), {});
  });
});
