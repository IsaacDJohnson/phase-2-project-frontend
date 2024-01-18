import React from "react";
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <div>
            <nav>
                <NavLink to="/" className="navbar">Home</NavLink>
                <NavLink to="/library" className="navbar" >Beast Library</NavLink>
                <NavLink to="/submission_form" className="navbar">Submit A New Beast</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;