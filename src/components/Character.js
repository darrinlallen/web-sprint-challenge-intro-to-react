// Write your Character component here
import React from 'react'

export default function Character(props) {
   const {movie} = props 
   console.log (movie)
return (      
<div>   
{movie.map(function(film, id){
   return (<p key={id}>{film}</p>) 
})}
</div>
)
}
