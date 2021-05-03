import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        <div class="actor">{actors[0].name}<ul>{actors[0].movies[0]} { actors[0].movies[1]} { actors[0].movies[2] }</ul></div>
        <div class="actor">{actors[1].name}<ul>{actors[1].movies[0]} { actors[1].movies[1]} { actors[1].movies[2] }</ul></div>
        <div class="actor">{actors[2].name}<ul>{actors[2].movies[0]} { actors[2].movies[1]} { actors[2].movies[2] }</ul></div>
        <div class="actor">{actors[3].name}<ul>{actors[3].movies[0]} { actors[3].movies[1]} { actors[3].movies[2] }</ul></div>
    </div>
  );
};

export default Actors;
