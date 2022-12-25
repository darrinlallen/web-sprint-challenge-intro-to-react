// Write your Character component here
import React from 'react'
import Film from './Film';
export default function Character(props) {
   const names = props.movie   
   console.log(names)
return (      
<div id="kid">
   {
names.map(function(film){
   return (<p>{film} </p>) 
})}  

</div>

)

}
    
