import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import GoHome from './GoHome';
import ViewFilms from './ViewFilms';

class App extends Component {
   
    render() { 
        return (
            <Router>
                <>
                <Link>Go Home</Link>
                <Link>View Films</Link>
                <Link>View People</Link>
                <Switch>
                    <Route path="/" component={GoHome} />
                    <Route path="/films" component={ViewFilms} />
                </Switch>
                </>
            </Router>
          );
    }
}
 
export default App;