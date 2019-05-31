import React, { Component } from 'react';

class VehicleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/vehicles/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({ details }))
  }

  render() {
    return (
      <section className="container">
        <div className="row justify-content-center m-3">
          <h3>{this.state.details.name}</h3>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <h5 className="card-header bg-primary text-white detail-card-header">Vehicle Details</h5>
            <div className="card-body">
              <p className="card-text">Name: {this.state.details.name}</p>
              <p className="card-text">Description: {this.state.details.description}</p>
              <p className="card-text">Vehicle Class: {this.state.details.vehicle_class}</p>
              <p className="card-text">Length: {this.state.details.length}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VehicleDetails;
