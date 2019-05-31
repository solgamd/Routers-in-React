import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import GoHome from '../views/GoHome';

import ViewFilms from '../views/ViewFilms';
import FilmDetails from '../views/FilmDetails';

import ViewPeople from '../views/ViewPeople';
import PeopleDetails from '../views/PeopleDetails';

import ViewLocations from '../views/ViewLocations';
import LocationDetails from '../views/LocationDetails';

import ViewSpecies from '../views/ViewSpecies';
import SpecieDetails from '../views/SpecieDetails';

import ViewVehicles from '../views/ViewVehicles';
import VehicleDetails from '../views/VehicleDetails';

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
                    <Route exact path="/ViewPeople/:id/details" component={PeopleDetails} />

                    <Route exact path="/ViewLocations" component={ViewLocations} />
                    <Route exact path="/ViewLocations/:id/details" component={LocationDetails} />

                    <Route exact path="/ViewSpecies" component={ViewSpecies} />
                    <Route exact path="/ViewSpecies/:id/details" component={SpecieDetails} />

                    <Route exact path="/ViewVehicles" component={ViewVehicles} />
                    <Route exact path="/ViewVehicles/:id/details" component={VehicleDetails} />



                </Switch>
            </main>
        </Router>
    );
}

export default App;