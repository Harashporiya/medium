import { UseBlog } from "../hooks/UseBlogs"
import { useParams } from "react-router-dom";
import FullBlog from "./FullBlog";
function Blog() {
    const { id } = useParams()
    const { loading, blogs } = UseBlog({id:id || ""});
    if(loading){
        return <div>
            loading...
        </div>
    }
  return (
    <div>
      <FullBlog blogs={blogs}/>
    </div>
  )
}

export default Blog
