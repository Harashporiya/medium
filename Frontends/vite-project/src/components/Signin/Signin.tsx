import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;
import "../stars/Star.css"
import '../stars/Star.scss'
function Signin() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
   const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${DEPLOY_URL}/api/signin`, {

        email,
        password,
      });
      // console.log(response.data)
      const jwt = response.data.jwt
      localStorage.setItem("token", jwt)
      const id = response.data.id
      localStorage.setItem("userId", id);
      const username = response.data.name;
      localStorage.setItem("username", username);
      toast.success(response.data.message, { position: "top-right" });
      setEmail('')
      setPassword('')
      setTimeout(()=>{
        navigate("/blogs")
      },6000)
    } catch (error) {
      console.log("error", error);
      toast.error("Inavlid Email and Password", { position: "top-right" });
    }
  };

  return (<>
   <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-yellow-500 to-yellow-200 overflow-hidden">
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar"></div>
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar2"></div>
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar3"></div>

    <div className="flex flex-col md:flex-row justify-around items-center h-screen bg-black">
      <div className="md:mr-10 mb-8 md:mb-0">
        <img
          src="https://media.licdn.com/dms/image/sync/D4E27AQG4HXiOC3eZAQ/articleshare-shrink_800/0/1712115722819?e=2147483647&v=beta&t=mvh4YoVddh3A323KIeOw62UuEzO_3ic2pK1xp_2sHV4"
          alt="Signup illustration"
          className="w-72 md:w-[900px] rounded-lg"
        />
      </div>
      <div className="w-full max-w-sm md:pb-0 pb-44">
        <form className="p-10 border-[1px]   bg-black xs:border-white  rounded-xl space-y-4" onSubmit={handleSubmit}>
          <p className="text-white text-2xl ml-2">Signin</p>
          <p className="text-gray-300 text-md ml-2">Enter your email below to login to your account</p>

          <div className="space-y-2">
            <label className="p-2 text-white  text-xl" htmlFor="email"> Email</label>
            <input
              className="border-[1px] border-gray-500 text-white p-2 rounded-md w-full bg-black focus:border-white focus:border-1"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="p-2 text-white text-xl" htmlFor="password"> Password </label>
            <input
              className="border-[1px] border-gray-500 text-white p-2 rounded-md w-full bg-black focus:border-white focus:border-1"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <div className="flex justify-center">
                        <button type="submit" className="text-black w-full font-normal  text-[17px] bg-white p-1 rounded-lg hover:bg-white">
                           Sign in
                        </button>
                    </div>
          <div className="flex items-center justify-center">
            <p className="text-white text-sm">
              Don't have an account?
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-300"
              >
                Signup
              </Link>
            </p>

          </div>

        </form>
      </div>
    </div>
    <ToastContainer />
    </div>
    </>
  );
}

export default Signin;
