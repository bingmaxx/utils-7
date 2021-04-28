# utils-7

some javascript function.

**action**: `utils-7` uses `ES6` syntax, you need to `polyfill` it yourself if you use it in the project.


### Installation
Using npm:
```sh
npm i utils-7 -S -D
```

### Usage
```js
// import all
import * as u7 from 'utils-7';

// import you need
import {
  obj2Query,
  deepCopy,
  copyByKey,
  getSS,
  setSS,
  removeSS,
  getLS,
  setLS,
  removeLS,
  mobileFormat,
  fileSizeFormat,
  currencyFormat,
  date2Timestamp,
  timestampFormat,
  getWeeks,
  download,
  downloadBlob,
} from 'utils-7';
```

### Doc
see folder [doc](./doc/doc.md).
