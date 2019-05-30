import React, { Component } from 'react';

class PeopleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(people => this.setState({ people }))
  }

  render() {
    return (
      <section className="container">
        <div className="row justify-content-center m-3">
          <h3>{this.state.people.name}</h3>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <h5 className="card-header bg-primary text-white detail-card-header">Character Details</h5>
            <div className="card-body">
              <p className="card-text">Gender: {this.state.people.gender}</p>
              <p className="card-text">Age: {this.state.people.age}</p>
              <p className="card-text">Eye Color: {this.state.people.eye_color}</p>
              <p className="card-text">Hair Color: {this.state.people.hair_color}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PeopleDetails;