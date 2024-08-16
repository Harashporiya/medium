import axios from "axios";

import { useEffect, useState } from "react"
const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;

interface Blog{
    content:string;
    title:string;
    id:number;
    author:{
        name:string;
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

