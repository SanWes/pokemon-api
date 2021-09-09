import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [allPokemon, setAllPokemon] = useState([])


    useEffect( () => {
  // ********Axios API get, then
          axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
          .then(response =>{
                console.log("the response looks like this");
                console.log("Axios Response aquired: ",response);

                //save the response into my state variable
                setAllPokemon(response.data.results)})
        
          .catch(err=> console.log(err))

          }, [] ) // end useEffect

  

  const clickHandler = () => {
    console.log("clicked, lets get api or axios api ");
    //use fetch to grab desired api 


    // ********Regular API Fetch Method, then
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
    
    // // need to set a promise with ".then" & ".catch" 
    // //.then means when response received successfully, do this
    // //.catch will be where we handle any errors received
    
    // .then(response =>{ 
    //   return response.json();
    // })
    

     // ********Axios API get Method, then
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(response =>{
      console.log("the response looks like this");
      console.log("Axios Response aquired: ",response);

      //save the response into my state variable
      setAllPokemon(response.data.results)
    })


    .catch(error=>{
      console.log(error);
    })

  } // end handler 


  return (
    <div className="App">
      
      <h1>Pokemon Palace</h1>
      <button onClick= {clickHandler} className="btn btn-success" > I choose You! </button>



      {allPokemon.map ((poke, id) => {

        var name = `${poke.name}`.toUpperCase();
        
        console.log(name)

        return <div key={id} >

        <ul className="list-group">
          <li className="list-group-item list-group-item-warning">{id +1}: {name} </li>
        </ul>

        </div>

      })
      }

    </div>
  );
}

export default App;
