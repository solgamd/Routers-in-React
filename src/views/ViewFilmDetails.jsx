import React from 'react';

class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(details => this.setState({ details }))
  }

  render() {
    return (
      <section className="container">
        <div className="row justify-content-center m-3">
          <h3>{this.state.details.title}</h3>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <h5 className="card-header bg-primary text-white detail-card-header">Film Details</h5>
            <div className="card-body">
              <p className="card-text">Description: {this.state.details.description}</p>
              <p className="card-text">Director: {this.state.details.director}</p>
              <p className="card-text">Producer: {this.state.details.producer}</p>
              <p className="card-text">Release Date: {this.state.details.release_date}</p>
              <p className="card-text">Rating: {this.state.details.rt_score}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FilmDetails;
