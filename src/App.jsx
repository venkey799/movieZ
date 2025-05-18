import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Fire from './assets/images/fires.jpeg'
import glowing from './assets/images/glowingstar.png'
import partyingface from './assets/images/partying-face.jpeg'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'
import SelectedMovie from './components/SelectedMovie/selectedMovie'
function App() {
  return (
    <div className='app'>
     <Navbar/>
     <Routes>
      <Route path="/" element={<MovieList type="popular" title="Popular" emoji={Fire}/>}></Route>
      <Route path="/upcoming" element={<MovieList type="upcoming" title="Upcoming" emoji={glowing}/>}></Route>
      <Route path="/top_rated" element={<MovieList type="top_rated" title="Top rated" emoji={partyingface}/>}></Route>
      <Route path="/movie/:id" element={<SelectedMovie/>}></Route>
     </Routes> 
    </div>
  )
}

export default App