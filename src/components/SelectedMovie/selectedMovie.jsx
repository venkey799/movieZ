import React from 'react'
import { useParams } from 'react-router-dom'

function SelectedMovie() {
    const {id} =useParams()
  return (
    <div>selectedMovie {id}</div>
  )
}

export default SelectedMovie