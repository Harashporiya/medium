import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;

function Signup() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const navigate = useNavigate

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${DEPLOY_URL}/api/signup`, {
                name,
                email,
                password,
            });
            setName('')
            setEmail('')
            setPassword('')
            toast.success("Create Account Successfull!", { position: "top-right" });
        } catch (error) {
            console.log("error", error);
            toast.error("Try Again", { position: "top-right" });
        }
    };

    return (<>
        <div className="flex flex-col md:flex-row justify-around items-center h-screen bg-black">
            <div className="md:mr-10 mb-8 md:mb-0">
                <img
                    src="https://media.licdn.com/dms/image/sync/D4E27AQG4HXiOC3eZAQ/articleshare-shrink_800/0/1712115722819?e=2147483647&v=beta&t=mvh4YoVddh3A323KIeOw62UuEzO_3ic2pK1xp_2sHV4"
                    alt="Signup illustration"
                    className="w-72 md:w-[900px] rounded-lg"
                />
            </div>
            <div className="w-full max-w-sm">
                <form className="p-10 border-[1px]  bg-black xs:border-white  rounded-xl space-y-4" onSubmit={handleSubmit}>
                    <p className="text-white text-2xl ml-2">Signup</p>
                    <p className="text-gray-300 text-md ml-2">Enter your information to create an account</p>
                    <div className="space-y-2">
                        <label className="p-2 text-white  text-xl" htmlFor="username"> Username</label>
                        <input
                            className="border-[1px] border-gray-500 text-white p-2 rounded-md w-full bg-black focus:border-white focus:border-1"
                            type="text"
                            id="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jhon"
                            required
                        />
                    </div>
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
                            Create an account
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-white text-ms">Already have an account?<Link to="/signin" className="text-blue-500 hover:text-blue-300"> Signin</Link>   </p>
                    </div>

                </form>
            </div>
        </div>
        <ToastContainer/>
        </>
    );
}

export default Signup;
