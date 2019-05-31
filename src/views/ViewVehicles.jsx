import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then(res => res.json())
      .then(vehicles => this.setState({ vehicles }))
  }

  render() {
    return (
      <>
        <h3>Vehicles</h3>
        <div className="row m-2">
          {this.state.vehicles.map(((vehicle, i) => {
            return (
              <div key={i} className="col-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header bg-primary text-white vehicle-card-header">{vehicle.name}</h4>
                  <div className="card-body">
                    <p className="card-text">Read more about this vehicle</p>
                    <div className="vehicle-id-div">
                      <Link className="vehicle-id-link btn btn-outline-primary" to={`/ViewVehicles/${vehicle.id}/details`} key={i}>HERE</Link>
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

export default ViewVehicles;