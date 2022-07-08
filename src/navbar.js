import React from 'react';
 
function Navbar (){
    return (
        <div className="navbar">
            <div className="nav-title">
                <h1>Movies Times</h1>
            </div>
            <div className="nav-search">
                <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='search' />
                <input />
                {/* <button type="button" className="btn">Search</button> */}
            </div>
        </div>
    );
}

export default Navbar;