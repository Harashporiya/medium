import {Avatar} from '../Blog/CardBlog'

export default function Nav() {
  return (
    <>
    <div className='border-b  flex justify-between px-10 py-4'>
        <div className='text-4xl flex flex-col justify-center'>Medium</div>
        <div className=''>
            <Avatar size={8} name='Harash poriya'/>
        </div>
    </div>
    </>
  )
}
