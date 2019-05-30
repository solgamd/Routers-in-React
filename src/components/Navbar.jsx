import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="justify-content-center">
            <h1>The World of Studio Ghibli</h1>
            <div className="row logo">
                <img src={require("../studio-ghibli-logo.svg")} alt="Ghibli Logo" height="100" width="200" />
            </div>
            <div className="row justify-content-center">
                <Link className="link btn btn-success" to="/">Go Home</Link>
                <Link className="link btn btn-success" to="/ViewFilms">View Films</Link>
                <Link className="link btn btn-success" to="/ViewPeople">View People</Link>
            </div>

        </div>
    );
}

export default Navbar;