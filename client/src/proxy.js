'use strict'

const path = require('path')
const proxy = require('http-proxy-middleware')
const convert = require('koa-connect')
const Router = require('koa-router')

const router = new Router()

const proxyOptions = {
	pathRewrite: {
		'/api': '/'
	},
	target: 'http://localhost:8081',
	changeOrigin: true
}

router.get('/api', convert(proxy(proxyOptions)))

module.exports.default = (app, middleware, options) => {
	// since we're manipulating the order of middleware added, we need to handle
	// adding these two internal middleware functions.
	middleware.webpack()
	middleware.content()

	// router *must* be the last middleware added
	app.use(router.routes())
}