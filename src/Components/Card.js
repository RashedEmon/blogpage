import React from 'react'
import { useDispatch } from 'react-redux'
import { selectAuthor, selectCategory } from '../Redux/filter/actions';

export default function Card({blog}) {
    const dispatch = useDispatch();
    const handleFilterByCategory=(category)=>{
        dispatch(selectCategory(category));
    }
    const handleFilterByAuthor=(author)=>{
        dispatch(selectAuthor(author));
    }
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
            <img
                className="h-48 w-full object-cover"
                src={blog.image}
                alt=""
            />
        </div>

        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p onClick={()=> handleFilterByCategory(blog.category)} className="text-sm font-medium text-indigo-600">
                    <span 
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                        {blog.category}
                    </span>
                </p>
                <a href="www.google.com" className="block mt-1" alt={''}>
                    <p
                        className="text-xl font-semibold text-gray-900"
                    >
                        {blog.title}
                    </p>
                </a>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <img onClick={()=>handleFilterByAuthor(blog.author.name)}
                        className="h-10 w-10 rounded-full"
                        src={blog.author.imageUrl}
                        alt=""
                    />
                </div>
                <div className="ml-3">
                    <p onClick={()=>handleFilterByAuthor(blog.author.name)}
                        className="text-sm font-medium text-gray-900 hover:underline"
                    >
                        {blog.author.name}
                    </p>
                    <div
                        className="flex space-x-1 text-sm text-gray-500"
                    >
                        <time datetime="2020-03-16"
                            >{blog.date}
                        </time>
                        <span aria-hidden="true">
                            &middot;
                        </span>
                        <span> {blog.duration} read </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
