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
      <div>
        <button onClick={togglePlanet}>
          {person.name}
        </button>
        {showPlanet && (
          <p>Planet: {planet.name}</p>
        )}
      </div>
    );
  }
  
  export default Character;
