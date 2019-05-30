import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import GoHome from '../views/GoHome';
import ViewFilms from '../views/ViewFilms';
import FilmDetails from '../views/ViewFilmDetails';
import ViewPeople from '../views/ViewPeople';
import ViewPeopleDetails from '../views/PeopleDetails';
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
                    <Route exact path="/ViewPeople" component={ViewPeople} />
                    <Route exact path="/ViewPeople/:id/details" component={ViewPeopleDetails} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;