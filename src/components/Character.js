// Write your Character component here
import React from 'react'
import Film from './Film';
export default function Character(props) {
   const names = props.movie   
return (      
<div>
   {
names.map(function(film){
   return (<p>{film}</p>) 
})}
</div>

)

}
    
