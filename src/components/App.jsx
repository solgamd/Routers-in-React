import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import GoHome from '../views/GoHome';
import ViewFilms from '../views/ViewFilms';
import FilmDetails from '../views/ViewFilmDetails';
import './App.css';

const App = () => {

    return (
        <Router>
            <Navbar />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={GoHome} />
                    <Route exact path="/ViewFilms" component={ViewFilms} />
                    <Route exact path="/ViewFilms/:id/details" component={FilmDetails} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;