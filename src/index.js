import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import MovieList from "./movie_list";
import MovieSearch from "./MovieSearch";
import Navbar from "./navbar";
import "./App.css";
import Homepage from "./Homepage";
function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/MovieSearch/:id" element={<MovieSearch />}/>
            <Route path="/" element={<Homepage />}/>
        </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById("root"));