const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-body-parser')
const app = new Koa()
const ElasticSearch = require('elasticsearch')
const uuidv4 = require('uuid/v4')

const client = new ElasticSearch.Client({
	host: 'localhost:9200',
	apiVerson: '5.0'
})

const router = new Router()
// router.get('*', async ctx => {
// 	ctx.body = todos
// })

router.post('/search', async ctx => {
	const response = await client
		.search({
			index: 'no-plastic',
			type: 'product',
			body: {
				query: {
					match: {
						title: ctx.request.body
					}
				}
			}
		})
		.catch(error => {
			throw Error(error)
		})

	ctx.body = response.hits.hits.map(x => x._source)
})

router.post('/add', async ctx => {
	const response = await client
		.create({
			index: 'no-plastic',
			type: 'product',
			id: uuidv4(),
			body: ctx.request.body
		})
		.catch(error => {
			throw Error(error)
		})

	ctx.body = response
})
//
// router.delete('*', async ctx => {
// 	const index = Number(ctx.request.body)
// 	todos.splice(index, 1)
//
// 	ctx.body = todos
// })

app.use(bodyParser())
app.use(router.routes())

app.listen(9092)
