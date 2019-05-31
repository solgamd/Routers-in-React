import React, { Component } from 'react';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/species/${this.props.match.params.id}`)
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
            <h5 className="card-header bg-primary text-white detail-card-header">Specie Details</h5>
            <div className="card-body">
              <p className="card-text">Classification: {this.state.details.classification}</p>
              <p className="card-text">Eye Color: {this.state.details.eye_color}</p>
              <p className="card-text">Hair: {this.state.details.hair_color}</p>
              <p className="card-text">URL: {this.state.details.url}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FilmDetails;
