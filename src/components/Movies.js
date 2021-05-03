import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div class="movie">{movies[0].title}{movies[0].time}<ul>{movies[0].genres[0]}{movies[0].genres[1]}{movies[0].genres[2]}</ul>{movies[0].metascore}</div>
        <div class="movie">{movies[1].title}{movies[1].time}<ul>{movies[1].genres[0]}{movies[1].genres[1]}{movies[1].genres[2]}{movies[1].genres[3]}{movies[1].genres[4]}</ul></div>
        <div class="movie">{movies[2].title}{movies[2].time}<ul>{movies[2].genres[0]}{movies[2].genres[1]}{movies[2].genres[2]}{movies[2].genres[3]}{movies[2].genres[4]}</ul></div>
    </div>
  );
};

export default Movies;
