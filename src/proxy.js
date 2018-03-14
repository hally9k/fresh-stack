'use strict'

const path = require('path')
const proxy = require('http-proxy-middleware')
const convert = require('koa-connect')
const Router = require('koa-router')

const router = new Router()

const proxyOptions = {
	pathRewrite: {
		'/images/kitten': '/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg'
	},
	target: 'http://kittenrescue.org',
	changeOrigin: true
}

router.get('/images/kitten', convert(proxy(proxyOptions)))

module.exports.default = (app, middleware, options) => {
	// since we're manipulating the order of middleware added, we need to handle
	// adding these two internal middleware functions.
	middleware.webpack()
	middleware.content()

	// router *must* be the last middleware added
	app.use(router.routes())
}

// module.exports = {
// 	entry: {
// 		index: [path.resolve(__dirname, 'app.js')]
// 	},
// 	mode: 'development',
// 	output: {
// 		filename: 'output.js'
// 	}
// }

// module.exports.serve = {
// 	content: [__dirname],
// 	add: (app, middleware, options) => {
// 		// since we're manipulating the order of middleware added, we need to handle
// 		// adding these two internal middleware functions.
// 		middleware.webpack()
// 		middleware.content()
//
// 		// router *must* be the last middleware added
// 		app.use(router.routes())
// 	}
// }
