import assert from 'assert';
import { mobileFormat, fileSizeFormat, currencyFormat } from '../src/format';

describe('mobileFormat', function () {
  it('normal', function () {
    assert.strictEqual(mobileFormat('18866668888'), '18866668888');
    assert.strictEqual(mobileFormat('18866668888', '86'), '18866668888');
    assert.strictEqual(mobileFormat('18866668888', '11'), '+11 18866668888');
    assert.strictEqual(mobileFormat(null, '11'), '+11 null');
  });
});

describe('fileSizeFormat', function () {
  it('normal', function () {
    assert.strictEqual(fileSizeFormat(1023), '1023 B');
    assert.strictEqual(fileSizeFormat(1024), '1.00 KB');
    assert.strictEqual(fileSizeFormat(1025), '1.00 KB');
    assert.strictEqual(fileSizeFormat(1024*1024), '1.00 MB');
    assert.strictEqual(fileSizeFormat(1024*1024*1024), '1.00 GB');
    assert.strictEqual(fileSizeFormat(1024*1024*1024*365), '365.00 GB');
  });

  it('wrong data type', function () {
    assert.strictEqual(fileSizeFormat('1023'), 0);
    assert.strictEqual(fileSizeFormat(null), 0);
  });
});

describe('currencyFormat', function () {
  it('currencyFormat', function () {
    assert.strictEqual(currencyFormat(1111.1), '1,111.10');
    assert.strictEqual(currencyFormat(1111.1, 0, 0), '1,111');
  });

  it('currencyFormat blank', function () {
    assert.strictEqual(currencyFormat(null, 0), 0);
    assert.strictEqual(currencyFormat(0, '--'), '--');
  });
});
