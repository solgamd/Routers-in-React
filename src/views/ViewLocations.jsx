import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    } 
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(locations => this.setState({ locations }))
    }

    render() {
        return (
            <>
            <h3>Locations</h3>
            <div className="row m-2">
              {this.state.locations.map(((location, i) => {
                return (
                  <div key={i} className="col-4 mb-4">
                    <div className="card h-100">
                      <h4 className="card-header bg-primary text-white location-card-header">{location.name}</h4>
                      <div className="card-body">
                        <p className="card-text">Read more about this location</p>
                        <div className="location-id-div">
                          <Link className="location-id-link align-items-end btn btn-outline-primary" to={`/ViewLocations/${location.id}/details`} >HERE</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }))}
            </div>
          </>
    
        )
    }
}

export default ViewLocations;

