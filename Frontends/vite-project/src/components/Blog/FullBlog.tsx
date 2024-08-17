import { Blog } from "../hooks/UseBlogs"
import Nav from "../Navbar/Nav"
import { Avatar } from "./CardBlog"

export const FullBlog = ({ blogs }: { blogs: Blog }) => {
    return (<>
        <Nav />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 pt-10 px-10 w-full max-w-screen-2xl pt-200 ">

                <div className=" col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blogs.title}
                    </div>
                    <div className="text-slate-500">
                        17 Aug 2024
                    </div>
                    <div className="text-3xl font-extrabold">
                        {blogs.content}
                    </div>


                </div>
                <div className="col-span-4">
                  <div className="text-slate-600 text-lg">
                  Author
                  </div>
                    <div className="flex w-full">
                       <div className="pr-4 flex flex-col justify-center">
                       <Avatar name={blogs.author.name} size={"big"} />
                       </div>
                        <div>
                        <div className="font-bold text-xl ">
                            {blogs.author.name || "Anonymous"}
                        </div>
                        <div className="text-slate-500">
                            My name is harash lfl4l ooriiuh oihrirtt5iu irhirhi poirhir

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default FullBlog
