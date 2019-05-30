import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class ViewFilms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }))
  }
  
  render() {
    return (
      <>
      <h1>Studio Ghibli Films</h1>
      <div className="row m-2">
        {this.state.films.map(((film, i) => {
          return (
            <div className="col-4 mb-4">
            <div className="card h-100">
                <h4 className="card-header bg-primary text-white film-card-header">{film.title}</h4>
                <div className="card-body">
                    <p className="card-text">{film.description}</p>
                    <div className="film-id-div">
                        <Link className="film-id-link btn btn-outline-primary" to={`/ViewFilms/${film.id}/details`} key={i}>Film Details</Link>
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

export default ViewFilms;