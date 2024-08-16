import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

app.post("/signup", async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate())

    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
                password:body.password
            }
        })

        const token = await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({ message:"Create Account Successfull"})

    } catch (error) {
        c.status(403);
		return c.json({ error: "error while signing up" });
    }
})


app.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({message:"Sign in Successfull!"});
})

export default app