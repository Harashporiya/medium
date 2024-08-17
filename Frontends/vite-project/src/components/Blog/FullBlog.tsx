import { Blog } from "../hooks/UseBlogs";
import Nav from "../Navbar/Nav";
import { Avatar } from "./CardBlog";

export const FullBlog = ({ blogs }: { blogs: Blog }) => {
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-8 pt-10 px-6 w-full max-w-screen-2xl">
          <div className="col-span-12">
            <div className="text-5xl font-extrabold mb-6">
              {blogs.title}
            </div>
            <div className="text-slate-600 text-lg mb-4">
              Author
            </div>
            <div className="flex items-center mb-4">
              <div className="pr-4">
                <Avatar name={blogs.author.name} size={"big"} />
              </div>
              <div>
                <div className="font-bold text-xl">
                  {blogs.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500 mb-4">
                 {blogs.createdAt.slice(0,10)}
                </div>
              </div>
            </div>
            <div className="mb-8">
              <img src={blogs.image} alt="Blog image" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="text-3xl font-serif">
              {blogs.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;
