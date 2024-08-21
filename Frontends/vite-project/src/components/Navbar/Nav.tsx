import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '../Blog/CardBlog';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username") || "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('userId');
    localStorage.removeItem("username");
    toast.success("Logout Successfull!", { position: "top-right" });
   
    setTimeout(()=>{
      navigate('/signin');
    }, 6000);

  };

  return (<> 
    <div className='border-b bg-black flex justify-between items-center px-6 py-4'>
      <Link to={"/blogs"}>
        <div className='text-3xl md:text-4xl text-white flex flex-col justify-center cursor-pointer'>
          Medium
        </div>
      </Link>
      
    
      <div className='hidden md:flex space-x-4 items-center'>
        <Link to={"/publish"}>
          <button className='bg-white hover:bg-gray-300 px-5 font-medium p-2 text-black rounded-full'>Write blog</button>
        </Link>
        <button onClick={handleLogout} className='bg-white hover:bg-gray-300 px-5 font-medium p-2 text-black rounded-full'>
          Logout
        </button>
        <Link to={`/profile/${userId}`}>
          <Avatar size={"big"} name={username} />
        </Link>
      </div>

    
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
          <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

     
      {menuOpen && (
        <div className='absolute top-16 right-6 bg-white rounded-lg shadow-lg py-2 w-48 z-50 md:hidden'>
          <Link to={"/publish"} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Write blog
          </Link>
          <button onClick={handleLogout} className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Logout
          </button>
          <Link to={`/profile/${userId}`} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Profile
          </Link>
        </div>
      )}
    </div>
    <ToastContainer />
    </>
  );
}
