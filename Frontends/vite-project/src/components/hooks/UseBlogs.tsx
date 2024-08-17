import axios from "axios";

import { useEffect, useState } from "react"
const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;

export interface Blog{
    content:string;
    title:string;
    id:number;
    image:string;
    createdAt:string;
    author:{
        name:string;
    }
}

export const UseBlog =({id}:{id:string})=>{
    const [loading ,setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog>()

    useEffect(()=>{
        axios.get(`${DEPLOY_URL}/api/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res=>{
            setBlogs(res.data.post);
            setLoading(false)
        })
    },[id])
  return{
    loading,
    blogs
  }
}

export function UseBlogs() {
    const [loading ,setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog[]>()

    useEffect(()=>{
        axios.get(`${DEPLOY_URL}/api/blog/all`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res=>{
            setBlog(res.data.posts);
            setLoading(false)
        })
    },[])
  return{
    loading,
    blog
  }
}

