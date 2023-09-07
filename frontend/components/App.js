import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


import e from 'cors'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

 
  useEffect(() => {
    // Fetch planets and set them in state
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });

    // Fetch people and set them in state
    axios.get(urlPeople)
      .then(res => {
        setPeople(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);
     
  
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}

      {people.map(person => {
        const personHomeworld = planets.find(planet => planet.id === person.homeworld)
        return (
    
      <Character key={person.id} person={person} planet={personHomeworld} />
        );
      })}
    </div>
  );
}
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
