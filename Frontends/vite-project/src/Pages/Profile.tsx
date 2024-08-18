import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Navbar/Nav";

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
  const { userId } = useParams<{ userId: string }>();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>User profile not found.</div>;
  }

  return (
    <div>
      <Nav />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
        <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-lg bg-white">
              <img src={post.image} alt={post.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.content.slice(0, 60)}...</p>
              <p className="text-gray-500 text-sm mt-2">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
