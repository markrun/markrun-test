var fs = require('fs')
var test = require('../index')
var assert = require('assert')
var path = require('path')
describe('basic.js', function() {
    describe('test.read', function() {
        it('should read file', function () {
            var file = test.read(__dirname, 'read', 'some')
            assert.equal(
                fs.readFileSync(path.join(__dirname, 'read', 'some.html')).toString(),
                file.html
            )
            assert.equal(
                fs.readFileSync(path.join(__dirname, 'read', 'some.md')).toString(),
                file.md
            )
        })
    })
    describe('test.eql', function() {
        it('should eql', function() {
            var outputFilepath = path.join(__dirname, 'eql', 'basic-eql')
            var output = 'demo'
            var should = 'demo'
            test.eql(output, should, outputFilepath, false)
            var content = fs.readFileSync(outputFilepath + '.debug.html').toString()
            assert.equal(content, output)
        })
        it('should create file', function() {
            var outputFilepath = path.join(__dirname, 'eql', 'createfile')
            var output = 'demo'
            var should = 'demos'
            test.eql(output, should, outputFilepath, true)
            var content = fs.readFileSync(outputFilepath + '.html').toString()
            assert.equal(content, output)
        })
    })
})
