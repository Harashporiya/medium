import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  image: string;
  id: string;
}

export const CardBlog: React.FC<BlogCardProps> = ({
  id,
  authorName,
  title,
  content,
  image,
  publishedDate,
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='flex  items-start border-b border-slate-200 pt-10 w-min-screen cursor-pointer'>
        <div className='flex flex-col space-y-2 w-full'>
          <div className='flex items-center'>
            <Avatar size={"small"} name={authorName} />
            <div className='font-bold pl-2 text-sm'>{authorName}</div>
            <div className='flex items-center pl-2'>
              <Circle />
            </div>
            <div className='pl-2 font-thin text-slate-600'>{publishedDate}</div>
          </div>
          <div className='text-xl font-semibold'>
            {title}
          </div>
          <div className='text-md font-thin'>
            {content.slice(0, 100) + '...'}
          </div>
          <div className='text-slate-500 font-thin text-sm'>
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
          <div className='bg-slate-200 h-1 w-full mt-2'></div>
        </div>
        <div className='ml-4'>
          <img className='object-cover w-48 h-32 rounded-md' src={image} alt="Blog Image"/>
        </div>
      </div>
    </Link>
  );
};

function Circle() {
  return (
    <div className='h-1 w-1 rounded-full bg-slate-500'></div>
  );
}

export function Avatar({ name, size = 'small' }: { name: string, size: 'small' | 'big' }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-6 h-6' : 'w-10 h-10'} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className='text-sm font-bold text-gray-600 dark:text-gray-300'>
        {name[0]}
      </span>
    </div>
  );
}
