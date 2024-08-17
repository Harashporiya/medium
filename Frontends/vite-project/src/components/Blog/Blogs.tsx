import { UseBlogs } from "../hooks/UseBlogs"
import Nav from "../Navbar/Nav"
import { CardBlog } from "./CardBlog"

function Blogs() {
    const {loading, blog} = UseBlogs();

    if(loading){
        return <div>
            Loding...
        </div>
    }
  return (<>
  <Nav />
    <div className=" pl-2 pr-4 pt-16">
    <div className="max-w-6xl">
     {
       blog && blog.map(blogs=> <CardBlog
             key={blogs.id}
               id={blogs.id.toString()}
               createdAt={blogs.createdAt}
            authorName={blogs.author.name}
             title={blogs.title}
             content={blogs.content}
             image={blogs.image}
            //  publishedDate={blogs}
            />)
     }
    </div>
    </div>
    </>
  )
}

export default Blogs
