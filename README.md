# spprt
> Tiny support module for repetitive tasks

[![Travis](https://img.shields.io/travis/ecrmnn/spprt.svg?style=flat-square)](https://travis-ci.org/ecrmnn/spprt.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/spprt.svg?style=flat-square)](http://badge.fury.io/js/spprt)
[![npm downloads](https://img.shields.io/npm/dm/spprt.svg?style=flat-square)](http://badge.fury.io/js/spprt)
[![npm license](https://img.shields.io/npm/l/spprt.svg?style=flat-square)](http://badge.fury.io/js/spprt)

### Installation
```bash
npm install spprt --save
```

### Support
Node 0.10 +

### API

#### last(array)
```javascript
var spprt = require('spprt');

spprt.last(['a', 'b', 'c']);
//=> 'c'
```

#### has(array|object)
```javascript
var spprt = require('spprt');

spprt.has(['a', 'b', 'c'], 'b');
//=> true

spprt.has({username: ecrmnn}, 'rainbows');
//=> false
```

#### inArray(array)
```javascript
var spprt = require('spprt');

spprt.inArray(['a', 'b', 'c'], 'b');
//=> true
```

#### only(object, [properties])
```javascript
var spprt = require('spprt');

spprt.only({
    name: 'Liverpool Football Club',
    nickname: 'The Reds',
    shortname: 'LFC'
  },
  ['name', 'shortname']
);
//=> {name: 'Liverpool Football Club', shortname: 'LFC'}
```

#### except(object, [properties])
```javascript
var spprt = require('spprt');

spprt.except({
    name: 'Liverpool Football Club',
    nickname: 'The Reds',
    shortname: 'LFC'
  },
  ['name', 'shortname']
);
//=> {nickname: 'The Reds'}
```

#### merge(array|object, [values, ...])
```javascript
var spprt = require('spprt');

spprt.merge([1],[2],[3],[4]);
//=> [1, 2, 3, 4]

spprt.merge({
    a: true
  }, {
    b: false
  }, {
    a: false
  });
//=> {a: true, b: false}
```

#### unique(array)
```javascript
var spprt = require('spprt');

spprt.unique(['rainbows', 'sunshine', 'rainbows']);
//=> ['rainbows', 'sunshine']
```

#### shuffle(array)
```javascript
var spprt = require('spprt');

spprt.shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
//=> [6, 4, 3, 2, 8, 7, 1, 5]
```


#### diff(array, [array, ...])
```javascript
var spprt = require('spprt');

spprt.diff([2, 3, 4], [3, 4, 5]);
//=> [2]

spprt.diff([2, 3, 4], [3, 4, 5], [9, 8, 7, 2]);
//=> []
```

#### intersect(array, [array, ...])
```javascript
var spprt = require('spprt');

spprt.diff([2, 3, 4], [3, 4, 5]);
//=> [3, 4]

spprt.diff([2, 3, 4], [3, 4, 5], [9, 8, 7, 2]);
//=> [2, 3, 4]
```

#### trim(string)
```javascript
var spprt = require('spprt');

spprt.trim('just       a  random  string');
//=> 'just a random string'
```


### License
MIT © [Daniel Eckermann](http://danieleckermann.com)