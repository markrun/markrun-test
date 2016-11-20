# markrun-test

[![Build Status](https://api.travis-ci.org/markrun/markrun-test.svg)](https://travis-ci.org/markrun/markrun-test) [![NPM version](https://img.shields.io/npm/v/markrun-test.svg?style=flat)](https://npmjs.org/package/markrun-test) [![NPM downloads](http://img.shields.io/npm/dm/markrun-test.svg?style=flat)](https://npmjs.org/package/markrun-test)

```js
var markrun = require('markrun')
var test = require('markrun-test')
describe('markrun-test', function() {
    describe('read&eql', function() {
        it("should return {html:'',md:'', path: '/Users/...'}", function() {
            var file = test.read(__dirname, 'basic', 'some')
            test.eql(
                markrun('**strong**'),
                file.html,
                file.path,
                // write html file
                true
            )
        })
    })
})

```

**output:** [basic](./basic)

## read(arguments)

```js
var test = require('markrun-test')
var file = test.read(__dirname, 'basic', 'some')
/*
{
    html: '<!DOCTYPE html>\...<strong>strong</strong></p></body>\n</html>',
    md: '**strong**\n',
    path: '/Users/nimo/Documents/git/markrun-test/basic/some'
}
*/
```

## eql(output, should, path, writeHTMLFile)

```js
test.eql(
    markrun('**strong**'),
    file.html,
    file.path,
    // write html file
    true
)
```
