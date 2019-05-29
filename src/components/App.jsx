import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import GoHome from './GoHome';
import ViewFilms from './ViewFilms';
import ViewFilmId from './ViewFilmId';
import ViewPeople from './ViewPeople';
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <>
                    <Link className="link" to="/">Go Home</Link>
                    <Link className="link" to="/ViewFilms">View Films</Link>
                    <Link className="link" to="/ViewPeople">View People</Link>
                    <Switch>
                        <Route exact path="/" component={GoHome} />
                        <Route path="/ViewFilms" component={ViewFilms} />
                        <Route path="/ViewFilmId" component={ViewFilmId} />
                        <Route path="/ViewPeople" component={ViewPeople} />
                    </Switch>
                </>
            </Router>
        );
    }
}

export default App;