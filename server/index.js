const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-body-parser')
const app = new Koa()
const ElasticSearch = require('elasticsearch')

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
			index: 'simpsons',
			type: 'episode',
			body: {
				query: {
					match: {
						title: ctx.request.body
					}
				}
			},
			_sourceInclude: ['title']
		})
		.catch(error => {
			throw Error(error)
		})

	ctx.body = response.hits.hits.map(x => x._source)
})

router.post('/add', async ctx => {
	// ctx.request.body

	const response = await client
		.get({
			index: 'simpsons',
			type: 'episode',
			id: 1
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
