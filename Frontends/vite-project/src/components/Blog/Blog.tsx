import { UseBlog } from "../hooks/UseBlogs";
import { useParams } from "react-router-dom";
import FullBlog from "./FullBlog";


function Blog() {
    const { id } = useParams();
    const { loading, blogs } = UseBlog({ id: id || "" });

    if (loading) {
        return <div>loading...</div>;
    }

   
    if (blogs && typeof blogs === 'object') {
        return (
            <div>
                <FullBlog blogs={blogs} />
            </div>
        );
    } else {
        return <div>No blog found.</div>;
    }
}

export default Blog;
