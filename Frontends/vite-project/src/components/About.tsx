import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-[#242424] min-h-screen">
                <div className="flex  md:flex-row justify-between p-8 items-center">
                    <div>
                        <p className="text-4xl md:text-6xl text-white">Medium</p>
                    </div>
                    <div className="space-x-4 md:space-x-10 mt-4 md:mt-0">
                        <button onClick={()=>navigate("/signin")} className="border-2 text-xl md:text-2xl rounded-full px-6 py-2 md:p-4 text-white">
                            Sign in
                        </button>
                        <button onClick={()=>navigate("/signup")} className="bg-black text-xl md:text-2xl px-6 py-2 md:p-4 text-white rounded-full">
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="bg-white h-[1px]"></div>
                <div className="flex-row justify-center mt-12 md:ml-60 md:mt-24 md:block hidden">
                    <p className="h-[6px] w-[6px] bg-white"></p>
                </div>
                <div className="flex flex-col md:flex-row p-10 justify-between">
                    <div>
                        <p className="text-white text-5xl md:text-9xl">Everyone has a <br /> story to tell.</p>
                    </div>
                    <div className="flex-col justify-center mt-12 md:ml-60 md:mt-24 md:block hidden">
                        <p className="h-[6px] w-[6px] bg-white"></p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly p-10">
                    <div>
                        <p className="text-white text-xl md:text-4xl">Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>
                    </div>
                    <div className="flex-col justify-center mt-12 md:ml-60 md:mt-24 md:block hidden">
                        <p className="h-[6px] w-[6px] bg-white"></p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row p-10">
                    <div>
                        <p className="text-white text-xl md:text-4xl">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                    </div>
                    <div className="flex-col justify-center mt-12 md:ml-60 md:mt-24 md:block hidden">
                        <p className="h-[6px] w-[6px] bg-white"></p>
                    </div>
                </div>
                <div className="bg-white h-[1px]"></div>
            </div>
            <div className="bg-[#242424] hover:bg-white hover:text-black">
                <p className="text-4xl md:text-8xl text-white p-6 md:p-10 hover:text-black">Start reading</p>
            </div>
            <div className="bg-white h-[1px]"></div>
            <div className="bg-[#242424] hover:bg-white hover:text-black">
                <p className="text-4xl md:text-8xl text-white p-6 md:p-10 hover:text-black">Start Writing</p>
            </div>
            <div className="bg-white h-[1px]"></div>
            <div className="bg-[#242424] hover:bg-white hover:text-black">
                <p className="text-4xl md:text-8xl text-white p-6 md:p-10 hover:text-black">Become a member</p>
            </div>
            <div className="bg-[#ffffff]">
                <div className="flex flex-col  md:flex-row md:justify-between p-8">
                    <div>
                        <p className="text-4xl md:text-6xl text-black text-center">Medium</p>
                    </div>
                    <div className="md:space-y-0 md:space-x-10 space-x-10 flex flex-row justify-center  text-xl">
                        <p>About</p>
                        <p>Term</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
