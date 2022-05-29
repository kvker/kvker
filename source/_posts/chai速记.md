---
layout: note
title: chai速记
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`https://www.chaijs.com/chai.js`

## assert

```js
const { assert } = require('chai')
assert(val)
assert.fail(actual, expected)
assert.ok(val)                        // is truthy
assert.equal(actual, expected)        // compare with ==
assert.strictEqual(actual, expected)  // compare with ===
assert.deepEqual(actual, expected)    // deep equal check
assert.isTrue(val)
assert.isFalse(val)
assert.isNull(val)
assert.isNotNull(val)
assert.isUndefined(val)
assert.isDefined(val)
assert.isFunction(val)
assert.isObject(val)
assert.isArray(val)
assert.isString(val)
assert.isNumber(val)
assert.isBoolean(val)
assert.typeOf(/tea/, 'regexp') // Object.prototype.toString()
assert.instanceOf(chai, Tea)
assert.include([ a,b,c ], a)
assert.match(val, /regexp/)
assert.property(obj, 'tea') // 'tea' in object
assert.deepProperty(obj, 'tea.green')
assert.propertyVal(person, 'name', 'John')
assert.deepPropertyVal(post, 'author.name', 'John')
assert.lengthOf(object, 3)
assert.throws(function() { ... })
assert.throws(function() { ... }, /reference error/)
assert.doesNotThrow
assert.operator(1, '<', 2)
assert.closeTo(actual, expected)
```

## bdd

```js
const { expect } = require('chai')
expect(object)
.to.equal(expected)
.to.eql(expected)        // deep equality
.to.deep.equal(expected) // same as .eql
.to.be.a('string')
.to.include(val)
.be.ok(val)
.be.true
.be.false
.to.exist
.to.be.null
.to.be.undefined
.to.be.empty
.to.be.arguments
.to.be.function
.to.be.instanceOf
.to.be.gt(5)  // aka: .above .greaterThan
.to.be.gte(5) // aka: .at.least
.to.be.lt(5)  // aka: .below
.to.respondTo('bar')
.to.satisfy((n) => n > 0)
.to.have.members([2, 3, 4])
.to.have.keys(['foo'])
.to.have.key('foo')
expect(() => { ··· })
.to.throw(/not a function/)
```
  