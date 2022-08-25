import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchImage from '../assets/search.svg'
import { selectQuery } from '../Redux/filter/actions';

export default function Search() {
    const [query,setQuery] = useState('');
    const dispatch = useDispatch()
    const searchHandler=(e,delay)=>{
        setQuery(e.target.value)
        let timeout;
        if(timeout){
            clearTimeout(timeout);
        }
        timeout=setTimeout(()=>{
            dispatch(selectQuery(e.target.value));
        },delay)
    }
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input onChange={(e)=>searchHandler(e,500)}
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={query}
        />
        <img
            className="inline h-6 cursor-pointer"
            src={searchImage}
            alt="Search"
        />
    </div>
  )
}
