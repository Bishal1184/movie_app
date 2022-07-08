import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
function MovieSearch() {
    const params = useParams();
    const key = "5167a302";
    const [movie, setMovie] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [id, setId] = useState(params.id);

    useEffect(() => {
        const getMovie = async() => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}&plot=full`);
            const result = await response.json();
            if(response.ok){
                setMovie(result);
            }else{
                setErrorMessage(result.message);
            }
        }
        getMovie();
    },[])
    return (
        <>
        <Navbar/>
        {movie && <div className="movie-container">
            <div className="movie-content">
                <img className="movie-poster" src={movie.Poster} alt="Poster" />
                <div className="movie-title">
                    <h4>{movie.Title}</h4>
                    <p>ivvskcsdnsdnvdsvsdsvnoisdn</p>
                </div>
            </div>
            </div>}
        </>
    )
}



export default MovieSearch;