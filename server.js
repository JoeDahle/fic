var express = require('express');
var express = express();

module.exports = {
  app: function () {
    var app = express()
    var indexPath = path.join(__dirname, '/../index.html')
    var publicPath = express.static(path.join(__dirname, '../dist'))

    app.use('/dist', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
