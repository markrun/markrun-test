var fs = require('fs-extra')
var path = require('path')
var expect = require('expect.js')
module.exports = {
    /**
     *  @param arguments
     *      read('markrun-code', 'basic')
     *  @return {Object}
     *  {
     *      html: 'Start\nThis text is display\nEnd\n',
     *      md: 'Start\n<!--\nMARKRUN-CODE\nThis text is display\n-->\nEnd\n',
     *      path: '/Users/nimo/Documents/git/markrun/test/markrun-code/basic'
     *  }
     */
    read: function () {
        var propsPath = []
        var i
        for(i=0; i<arguments.length; i++) {
            propsPath.push(arguments[i])
        }
        var filePath = ''
        propsPath.forEach(function (item) {
            filePath = path.join(filePath, item)
        })
        var htmlPath =  filePath + '.html'
        var mdPath =  filePath + '.md'
        var html = fs.readFileSync(htmlPath, 'utf-8').toString()
        var md =  fs.readFileSync(mdPath, 'utf-8').toString()
        return {
            html: html,
            md: md,
            path: filePath
        }
    },
    /**
     * @param output {String}
     * @param should {String}
     * @param path {String} filepath
     * @param writeHTMLFile {Boolean}
     */
    eql: function (output, should, path, writeHTMLFile) {
        if (writeHTMLFile) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log('Debug writeHTMLFile: ' + path + '.html')
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            fs.outputFileSync(path + '.html',output)
            return
        }
        fs.outputFileSync(path + '.debug.html',output)
        expect(output).to.eql(should)
    }
}
