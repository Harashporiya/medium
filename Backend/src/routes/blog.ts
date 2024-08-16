import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';



const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string,
  },
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";

  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);

    if (user && typeof user.id === "string") {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({ message: "You are not logged in" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ message: "You are not logged in" });
  }
});

blogRouter.post("/blog", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  try {
    const userId = c.get("userId");
    const body = await c.req.json();

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({
      post,
      postId: post.id,
    });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error creating the blog post" });
  }
});

blogRouter.put("/blog/update", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  try {
    const body = await c.req.json();

    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      post,
      postId: post.id,
    });
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error updating the blog post" });
  }
});

blogRouter.get("/blog/all", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({   
        orderBy: { createdAt: "desc" },
        take: 10,});
    return c.json({posts});
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error fetching blog posts",error });
  }
});

blogRouter.get("/blog/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");

    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (post) {
      return c.json({ post });
    } else {
      c.status(404);
      return c.json({ message: "Blog post not found" });
    }
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error while fetching blog post" });
  }
});

export default blogRouter;
