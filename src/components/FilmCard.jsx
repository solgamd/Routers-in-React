import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = (props) => {

    return (
        <div className="col-4 mb-4">
            <div className="card h-100">
                <h4 className="card-header bg-primary text-white film-card-header">{props.title}</h4>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                    <Link className="link" to="/:id">View Film ID</Link>
                </div>
            </div>
        </div>
    );
}

export default FilmCard;


