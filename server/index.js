const Koa = require('koa')
const app = new Koa()

let incrementer = 0

app.use(async function(ctx) {
	console.log(incrementer)
	ctx.body = ++incrementer
})

app.listen(8081)
