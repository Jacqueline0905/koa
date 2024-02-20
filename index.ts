import * as Koa from 'koa'
import KoaStaticCache from 'koa-static-cache'
const app = new Koa()


app.use(async (ctx, next) => {
  ctx.body = 'hello world'
})

app.use(KoaStaticCache('./static', {
  gzip: true,
  prefix: '/public',
  dynamic: true
}))

app.listen(3000)