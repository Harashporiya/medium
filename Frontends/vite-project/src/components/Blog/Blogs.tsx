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
  <Nav/>
    <div className="flex justify-center">
    <div className="max-w-xl">
     {
       blog && blog.map(blogs=> <CardBlog
             key={blogs.id}
               id={blogs.id.toString()}
            authorName={blogs.author.name}
             title={blogs.title}
             content={blogs.content}
             image={blogs.image}
             publishedDate={"16 Aug 2024"}
            />)
     }
    </div>
    </div>
    </>
  )
}

export default Blogs
