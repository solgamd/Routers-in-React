import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="justify-content-center">
            <h1 className="title">The World of Studio Ghibli</h1>
            <div className="row logo">
                <img src={require("../studio-ghibli-logo.svg")} alt="Ghibli Logo" height="100" width="200" />
            </div>
            <div className="row justify-content-center">
                <Link className="linkHome btn btn-secondary" to="/">HOME</Link>
            </div>
            <div className="row justify-content-center">
                <Link className="link btn btn-info" to="/ViewFilms">View Films</Link>
                <Link className="link btn btn-info" to="/ViewPeople">View Characters</Link>
                <Link className="link btn btn-info" to="/ViewLocations">View Locations</Link>
                <Link className="link btn btn-info" to="/ViewSpecies">View Species</Link>
                <Link className="link btn btn-info" to="/ViewVehicles">View Vehicles</Link>
            </div>
        </div>
    );
}

export default Navbar;