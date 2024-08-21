import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Navbar/Nav";
import { Avatar } from "../components/Blog/CardBlog";

const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;

interface Post {
    id: string;
    title: string;
    content: string;
    image: string;
    createdAt: string;
}

interface UserProfile {
    id: string;
    name: string;
    email: string;
    posts: Post[];
}

function Profile() {
    const { userId} = useParams<{ userId: string , postId:string}>();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${DEPLOY_URL}/api/profile/${userId}`, {
                    headers: {
                        Authorization: localStorage.getItem("token") || '',
                    },
                });
                setProfile(response.data.userProfile);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    
    const handleDelete = async (postId: string) => {
        try {
            await axios.delete(`${DEPLOY_URL}/api/delete/${postId}`, {
                headers: {
                    Authorization: localStorage.getItem("token") || '',
                },
            });
            setProfile(prevProfile => ({
                ...prevProfile!,
                posts: prevProfile?.posts.filter(post => post.id !== postId) || [],
            }));
        } catch (error) {
            console.error("Error deleting the blog:", error);
        }
    };

   
    if (loading) {
        return <div>
             <div className="flex justify-center items-center h-screen">
        <div role="status">
          <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
        </div>;
    }

    if (!profile) {
        return <div>User profile not found.</div>;
    }

    return (
        <div>
            <Nav />
            <div className="p-6">
                <div className="flex justify-around">
                    <div>
                        <h1 className="md:text-5xl text-2xl font-bold mb-4">{profile.name}</h1>
                    </div>
                    <div>
                        <Avatar size="big" name={profile.name} />
                        <h1 className="text-xl font-bold mb-4">{profile.name}</h1>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {profile.posts.map((post) => (
                        <div key={post.id} className="border p-4 rounded-lg shadow-lg bg-white">
                            <img src={post.image} alt={post.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                            <p className="text-gray-700">{post.content.slice(0, 60)}...</p>
                            <p className="text-gray-500 text-sm mt-2">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
                           <div className="flex justify-between">
                           <div>
                                <button onClick={()=>handleDelete(post.id)} className="bg-red-600 hover:bg-red-500 px-6 p-2 font-bold  text-white rounded-xl">Delete</button>
                            </div>
                            <div>
                                <button className="p-2 bg-blue-700 hover:bg-blue-600 font-bold rounded-lg text-white">Update Blog</button>
                            </div>
                           </div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    );
}

export default Profile;
