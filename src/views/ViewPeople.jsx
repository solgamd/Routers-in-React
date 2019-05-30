import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(people => this.setState({ people }));
  }

  render() {
    return (
      <>
        <h3>Characters</h3>
        <div className="row m-2">
          {this.state.people.map(((people, i) => {
            return (
              <div key={i} className="col-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header bg-primary text-white people-card-header">{people.name}</h4>
                  <div className="card-body">
                    <p className="card-text">Read more about this character</p>
                    <div className="people-id-div">
                      <Link className="people-id-link align-items-end btn btn-outline-primary" onClick="this.getDetails()" to={`/ViewPeople/${people.id}/details`} >HERE</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }))}
        </div>
      </>
    );
  }
}

export default ViewPeople;