import { useNavigate } from 'react-router-dom';
import './Star.css';
import './Star.scss';

const Star = () => {
  const navigator = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-yellow-500 to-yellow-200 overflow-hidden">
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar"></div>
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar2"></div>
      <div className="absolute inset-0 w-px h-px bg-transparent small-stars animate-animStar3"></div>

      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-4xl md:text-5xl p-3">Medium</h1>
        </div>
        <div className="flex md:flex-row items-center text-lg md:text-2xl space-y-4 md:space-x-10 md:space-y-0">
          <button className="font-sans flex-none hidden md:block" onClick={()=>navigator('/about')}>Our Story</button>
          <button className="font-sans flex-none hidden md:block">Membership</button>
          <button className="font-sans flex-none hidden md:block">Write</button>
          <button className="font-sans flex-none hidden md:block">Sign in</button>
          <button className="bg-black p-3 md:p-4 text-white rounded-3xl font-bold cursor-pointer">Get started</button>
        </div>
      </div>

      <div className="bg-black h-[1px]"></div>

      <div className="flex-grow flex flex-col justify-center items-center space-y-6 md:space-y-10">
        <h1 className="text-5xl md:text-9xl font-bold text-center">
          Be part of a <br /> better internet
        </h1>
        <p className="text-lg md:text-2xl font-bold text-center">
          Read. Write. Deepen your understanding.
        </p>
        <p className="text-lg md:text-2xl font-bold text-center">
          Last chance! 2 days left to get 20% off membership
        </p>
        <p className="text-lg md:text-2xl font-bold text-center bg-black text-white rounded-full p-3 md:p-4 cursor-pointer">
          Become a member
        </p>
      </div>

      <footer className="py-6">
        <div className="bg-black h-[1px]"></div>
        <div className="flex justify-center items-center space-x-4 md:space-x-6 text-sm md:text-2xl mt-4">
          <button className="text-lg md:text-2xl font-bold">Help</button>
          <button className="text-lg md:text-2xl font-bold hidden md:block">Status</button>
          <button className="text-lg md:text-2xl font-bold"  onClick={()=>navigator('/about')}>About</button>
          <button className="text-lg md:text-2xl font-bold hidden md:block">Blog</button>
          <button className="text-lg md:text-2xl font-bold">Term</button>
          <button className="text-lg md:text-2xl font-bold hidden md:block">Team</button>
          <button className="text-lg md:text-2xl font-bold">Privacy</button>
        </div>
      </footer>
    </div>
  );
};

export default Star;
