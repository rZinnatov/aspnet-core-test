const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('proxy-middleware')
const config = require('./webpack.config')

const hotMiddlewareEntry = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

config.entry = {
  application: [
    config.entry.application,
    hotMiddlewareEntry
  ],
  at_login: [
    config.entry.at_login,
    hotMiddlewareEntry
  ],
  qb_login: [
    config.entry.qb_login,
    hotMiddlewareEntry
  ],
  vendor: config.entry.vendor
}

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

config.devtool = 'cheap-module-eval-source-map'

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(hotMiddleware(compiler, { noInfo: true, log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }))
app.use(proxyMiddleware('http://localhost:3000'))

const port = 5000

app.listen(port, function (error) {
  if (error) {
    console.log(error)
  } else {
    console.info(`==> 🚀 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
