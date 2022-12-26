// Write your Character component here
import React, {useEffect} from 'react'

export default function Character(props) {
   const finalData = props.name 
   console.log (finalData)
   useEffect(() =>{
console.log(finalData)
   })
return (      
<div>   
{
    
   finalData.map(function(film, id){
   return (<p key={id}>{film}</p>)})
   }
</div>
)
}
