import React from 'react'
import './MovieCard.css'
import '../../index.css'
import Star from '../../assets/images/Star.jpeg'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
   <Link to={`/movie/${movie.id}`}className='movie_card'>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.original_title}  className='movie_poster'/>
    <div className="movie_details">
      <h3 className='movie_details_heading'>{movie.original_title}</h3>
      <div className='align_center movie_date_rate'>
        <p>{movie.release_date}</p>
        <p>{movie.vote_average}<img src={Star} alt="" className='card_emoji' /></p>
      </div>
      <p className='movie_description'>
       {movie.overview.slice(0,100) + "..."}
      </p>
    </div>
   </Link>
  )
}

export default MovieCard