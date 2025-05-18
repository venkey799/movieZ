import React from 'react'
import '../../index.css'
import './MovieCard.css'

export default function FilterMovies({rating, clickeventrating,ratings}) {
  return (
    <div>
         <ul className="movie_filter align_center">
                {
                    ratings.map(item=>
                    <li  className={ rating === item ? 'movie_filter_item active':'movie_filter_item'} key={item} onClick={()=> clickeventrating(item)}>{item}+ star</li>)
                }
        </ul>
    </div>
  )
}
