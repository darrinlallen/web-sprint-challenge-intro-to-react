import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import './App.css'
import Character from './components/Character';
 export default function App() {
  // Try to think throsgh what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setdata] = useState([])
  let isApi = useRef(false)
useEffect(()=> {
axios.get('https://swapi.dev/api/people')
.then ( res => {

  if (isApi.current === false){
  let arrNames = [];
  let movie = res.data
    for (let i=0; i < 10; i++){
      arrNames.push(movie["results"][i].name)
    }
    setdata(arrNames)
  }
  
  })
.catch (err =>  console.error(err))
  
},[])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
  
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>{data.map((film,id) => <p>{film}</p>)}</div>
    </div>
  );
  
}
