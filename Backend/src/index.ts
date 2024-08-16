import { Hono } from 'hono'
import userRoute from './routes/user'
import blogRouter from './routes/blog'
import { cors } from 'hono/cors'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(cors())
app.route("/api",userRoute);
app.route("/api",blogRouter);
export default app
