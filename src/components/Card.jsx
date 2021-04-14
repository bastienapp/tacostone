import React from 'react';
import doom from '../images/Doom.jpg';

function Card(props) {
  const { mana, strength, defence, description } = props;

  return (
    <div>
      <img className="doom" src={doom} width="80px" alt="doom" />
      <h2>mana : {mana} </h2>
      <h2>force : {strength}</h2>
      <h2>Défense : {defence}</h2>      
      <p>{description}</p>
    </div>
  );
}

export default Card;