import React, { useState, useEffect } from 'react';
import axios from 'axios'

 // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  function Character({ person, planet }) {
    const [showPlanet, setShowPlanet] = useState(false);
  
    const togglePlanet = () => {
      setShowPlanet(!showPlanet);
    };
  
    return (
    
      <div className="character-card">
      <h3 className="character-name" onClick={togglePlanet}>
        {person.name}
      </h3>
      {showPlanet && (
        <p className="character-planet">
          Planet: <span> {planet.name}</span>
        </p>
      )}
    </div>
    )
      }
      
  export default Character;
