import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css'
import Character from './components/Character';
const App = () => {
  // Try to think throsgh what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setdata] = useState([])
useEffect(() => {
axios.get('https://swapi.dev/api/people')
.then ( res => {
    let data3 = res.data
    let data1 = data3["results"]
    let finalData =[];
    for (let i=0; i<data1.length;i ++){
      finalData.push(data1[i].name)
    }
   setdata(finalData)
  console.log(finalData)
})
.catch (err =>  console.error(err))
  
}, )

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character movie = {data} />
    </div>
  );
}

export default App;
