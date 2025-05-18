import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import './MovieList.css'
import '../../index.css'
import MovieCard from './MovieCard'
import FilterMovies from './FilterMovies'
import { Link, useParams } from 'react-router-dom'

function MovieList({type, title,emoji}) {
    const [movies,setMovies] = useState([]);
    const [filteredmovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(0);
    const [sort,setSort] = useState({
        by: "default",
        order: "asc"
    });
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=575eca9106a98af779c583a34ce5b706`)
        .then(response=>response.json())
        .then(data=>{
            setMovies(data.results);
            setFilteredMovies(data.results)})
        .catch(error=> console.log("Error frthing data:", error))
    },[type])


    useEffect(()=>{
        if(sort.by !== "default"){
            const sortedMovies = _.orderBy(filteredmovies, [sort.by], [sort.order])
            setFilteredMovies(sortedMovies)
        }
    })

   const handleRating = (rate) =>{
    console.log("buttonclicked " + rate)
    if(rate === rating){
        setRating(0);
        setFilteredMovies(movies);
    }else{
        setRating(rate)
        const filteredMovies = movies.filter((movie)=> movie.vote_average >= rate)
        setFilteredMovies(filteredMovies);
    } 
   }

   const handleSort = e =>{
    const {name,value} = e.target;
    setSort(prev =>({...prev, [name]: value})) 
   }
   
  return (
    <section className='movie_list' id={type}> 
    <header className='movie_list_header align_center'>
      
        <h2 className='movie_list_heading align_center'>{title}<img src={emoji} alt={`${emoji} icon`}  className='navbar_emoji' /></h2>
        <div className='movie_list_fs align_center'>
           <FilterMovies rating={rating} clickeventrating={handleRating} ratings={[8,7,6,5]}/>

            <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
                <option value="default">SortBy</option>
                <option value="release_date">Date</option>
                <option value="vote_average">Rating</option>
            </select>

            <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

        </div>
    </header>
    <div className="movie_cards">
        {
            filteredmovies.map(movie=>
            <MovieCard key={movie.id} movie={movie}/>
            )
        }
    </div>

    </section>
  )
}

export default MovieList