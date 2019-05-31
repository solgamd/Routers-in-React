import React, { Component } from 'react';

class LocationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(locations => this.setState({ locations }))
    }

    render() {
        return (
            <section className="container">
                <div className="row justify-content-center m-3">
                    <h3>{this.state.locations.name}</h3>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                    <h5 className="card-header bg-primary text-white location-card-header">Location Details</h5>

                        <div className="card-body">
                            <p className="card-text">Climate: {this.state.locations.climate}</p>
                            <p className="card-text">Terrain: {this.state.locations.terrain}</p>
                            <p className="card-text">Surface Water: {this.state.locations.surface_water}</p>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default LocationDetails;