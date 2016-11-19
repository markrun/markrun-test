var markrun = require('markrun')
var test = require('./index')
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
