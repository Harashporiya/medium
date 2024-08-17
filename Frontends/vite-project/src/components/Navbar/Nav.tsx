import { Link } from 'react-router-dom'
import {Avatar} from '../Blog/CardBlog'

export default function Nav() {
  return (
    <>
    <div className='border-b  flex justify-between px-10 py-4'>
      <Link to={"/blogs"}>
        <div className='text-4xl flex flex-col justify-center cursor-pointer'>Medium</div>
        </Link>
        <div className='space-x-4'>
          <Link to={"/publish"}>
          <button className='bg-green-700 hover:bg-green-800 mr-8 px-5 font-medium p-2 text-white rounded-full'>Write blog</button>
          </Link>
            <Avatar size={"small"} name="harash"/>
        </div>
    </div>
    </>
  )
}
