
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import MoviesList from "./movie_list";
import { useParams } from "react-router-dom";

function Homepage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=avenger&apikey=5167a302`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, [search]);
    const handleClick= async()=>{
        var searched = document.getElementById('search').value;
        setSearch(searched);
        const url = `http://www.omdbapi.com/?s=${searched}&apikey=5167a302`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
        document.getElementById('search').value='';
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-title">
                    <h1>Movies Times</h1>
                </div>
                <div className="nav-search">
                    <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='search' />
                    <input onClick={handleClick} id='search'/>
                    {/* <input className="type" id='search' placeholder="search" />
                    <button type="button" className="btn" onClick={handleClick}>Search</button> */}
                </div>
            </div>
            <MoviesList movies={movies} />
        </>
    );
}
export default Homepage;

