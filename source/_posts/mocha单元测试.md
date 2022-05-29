---
layout: note
title: mocha单元测试
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## browser

`mocha init test`

test.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>Mocha Tests</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>

    <script src="https://unpkg.com/chai/chai.js"></script>
    <script src="https://unpkg.com/mocha/mocha.js"></script>

    <script class="mocha-init">
      mocha.setup('bdd')
      mocha.checkLeaks()
    </script>
    <script src="test.js"></script>
    <script class="mocha-exec">
      mocha.run()
    </script>
  </body>
</html>
```

test.js
```js
function assert(func, params, result) {
  let passed = func(params) === result
  if(!passed) {
    throw new Error('未测试通过')
  }
}

function search(val) {
  return val
}

describe('#index.js', () => {
  describe('测试search是否返回本身', () => {
    before(function() {
      console.log('before:')
    })

    after(function() {
      console.log('after.')
    })

    beforeEach(function() {
      console.log('  beforeEach:')
    })

    afterEach(function() {
      console.log('  afterEach.')
    })

    it('search(1) should return -1', () => {
      assert(search, 1, -1)
    })

    it('search(1) should return 1', () => {
      assert(search, 1, 1)
    })
  })
})

```

## nodejs

```js
const assert = require('assert');
const sum = require('../hello');

describe('#hello.js', () => {
    describe('#sum()', () => {
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });

        it('sum() should return 0', () => {
            assert.strictEqual(sum(), 0);
        });

        it('sum(1) should return 1', () => {
            assert.strictEqual(sum(1), 1);
        });

        it('sum(1, 2) should return 3', () => {
            assert.strictEqual(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });
})
```

## nodejs异步
```js
const chai = require('chai')

const expect = chai.expect

describe('index', () => {
  it('测试根web页面获取', async () => {
    let ret = await axios.get('/')
    expect(ret).to.include('html')
  })
})
```
  