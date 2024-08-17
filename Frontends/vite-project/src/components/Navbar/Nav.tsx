import { Link } from 'react-router-dom'
import {Avatar} from '../Blog/CardBlog'

export default function Nav() {
  return (
    <>
    <div className='border-b  flex justify-between px-10 py-4'>
        <div className='text-4xl flex flex-col justify-center'>Medium</div>
        <div className='space-x-4'>
          <Link to={"/publish"}>
          <button className='bg-green-700 hover:bg-green-800 mr-8 px-5 font-medium p-2 text-white rounded-full'>Publish</button>
          </Link>
            <Avatar size={"big"} name='Harash poriya'/>
        </div>
    </div>
    </>
  )
}
