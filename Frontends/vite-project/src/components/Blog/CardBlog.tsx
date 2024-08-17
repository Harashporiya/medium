import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  // publishedDate: string;
  image: string;
  createdAt:string;
  id: string;
}

export const CardBlog: React.FC<BlogCardProps> = ({
  id,
  authorName,
  title,
  content,
  image,
  // publishedDate,
  createdAt,
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='flex flex-col md:flex-row items-start cursor-pointer bg-white shadow-md rounded-lg overflow-hidden mb-6'>
        <div className='flex-1 p-4'>
          <div className='flex items-center space-x-2 mb-2'>
            <Avatar size={"small"} name={authorName} />
            <div className='font-bold text-lg'>{authorName}</div>
            <div>in</div>
            <div className='font-bold text-gray-600'>{createdAt.slice(0,10)}</div>
          </div>
          <div className='text-3xl font-semibold mb-2'>
            {title}
          </div>
          <div className='text-2xl text-gray-700 mb-2'>
            {content.slice(0, 100) + '...'}
          </div>
          <div className='text-gray-500 text-sm'>
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
        </div>
        <div className='w-full md:w-1/3 flex items-center justify-center'>
          <img className='object-cover w-full h-60 rounded-lg' src={image} alt="Blog Image" />
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size = 'small' }: { name: string, size: 'small' | 'big' }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-12 h-12 text-lg' : 'w-16 h-16 text-xl'} overflow-hidden bg-gray-700 rounded-full`}>
      <span className='font-bold text-gray-100'>
        {name[0]}
      </span>
    </div>
  );
}
