import { Hono } from 'hono'
import userRoute from './routes/user'
import blogRouter from './routes/blog'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("/api",userRoute);
app.route("/api",blogRouter);
export default app
