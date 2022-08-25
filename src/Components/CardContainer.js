import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function CardContainer() {
    const items = useSelector((state)=> state.blog);
    const filter = useSelector((state)=> state.filter);

    const filterByCategory=(item)=> {
        if(filter.category===''){
            return true;
        }

        return item.category===filter.category;
    };
    const filterByAuthor=(item)=> {
        if(filter.author === ''){
            return true;
        }

        return item.author.name === filter.author;
    };

    const filterByQuery=(item)=> {
        if(filter.query === ''){
            return true;
        }

        return item.title.toLowerCase().includes(filter.query.toLowerCase());
    };
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {items.filter(filterByQuery).filter(filterByCategory).filter(filterByAuthor).map((item)=> <Card blog={item}/>)}
    </div>
  )
}
