import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewSpecies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/species")
      .then(res => res.json())
      .then(species => this.setState({ species }))
  }

  render() {
    return (
      <>
        <h3>Species</h3>
        <div className="row m-2">
          {this.state.species.map(((specie, i) => {
            return (
              <div key={i} className="col-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header bg-primary text-white specie-card-header">{specie.name}</h4>
                  <div className="card-body">
                    <p className="card-text">Read more about this species</p>
                    <div className="specie-id-div">
                      <Link className="specie-id-link btn btn-outline-primary" to={`/ViewSpecies/${specie.id}/details`} key={i}>HERE</Link>
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

export default ViewSpecies;