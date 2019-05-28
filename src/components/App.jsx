import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


class App extends Component {
   
    render() { 
        return (
            <Router>
                <>
                <Link>Page 1</Link>
                <Link>Page 2</Link>
                <Switch>
                    <Route />
                    <Route />
                </Switch>
                </>
            </Router>
          );
    }
}
 
export default App;