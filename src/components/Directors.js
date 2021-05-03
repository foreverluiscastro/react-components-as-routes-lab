import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        <div class="director">{directors[0].name}<ul>{directors[0].movies[0]} { directors[0].movies[1]} { directors[0].movies[2] }</ul></div>
        <div class="director">{directors[1].name}<ul>{directors[1].movies[0]} { directors[1].movies[1]} { directors[1].movies[2] }</ul></div>
        <div class="director">{directors[2].name}<ul>{directors[2].movies[0]} { directors[2].movies[1]} { directors[2].movies[2] }</ul></div>
    </div>
  );
}

export default Directors
