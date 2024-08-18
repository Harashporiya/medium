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
        image:body.image,
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
        image:body.image,
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
        orderBy: {  createdAt: "desc", },
        take: 10,
        select:{
          createdAt:true,
          content:true,
          title:true,
          image:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
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
      select:{
        createdAt:true,
        id:true,
        title:true,
        content:true,
        image:true,
        author:{
             select:{
              name:true
             }
        }
      }
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

blogRouter.get("/profile/:userId", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const userId = c.req.param("userId");

    const userProfile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        posts: {
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            title: true,
            content: true,
            image: true,
            createdAt: true,
          },
        },
      },
    });

    if (userProfile) {
      return c.json({ userProfile });
    } else {
      c.status(404);
      return c.json({ message: "User not found" });
    }
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error fetching user profile", error });
  }
});


export default blogRouter;
