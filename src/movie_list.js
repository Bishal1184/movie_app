import { Link } from 'react-router-dom';
import React  from 'react';
function MovieList({movies}){
    return (
        // <>
        <div className='movie'>
            {movies.map((movie, index) => (
                
                <div className="img-cont">
                    <img className="image-container" src={movie.Poster} alt='movie' />
                    <button className="button"><Link to={`/MovieSearch/${movie.imdbID}`}>See Details</Link></button>
                </div>
                
                    
                ))}
        </div>
        // </>
    );
}



export default MovieList;