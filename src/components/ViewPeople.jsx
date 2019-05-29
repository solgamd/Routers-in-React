import React from 'react';
import PeopleCard from './PeopleCard';

class ViewPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(ppl => this.setState({ people: ppl }))
  }
  render() {
    return (
      <>
        <h1>Studio Ghibli People</h1>
        <div className="row m-2 d-flex">
          {this.state.people.map((person, i) => {
            return (
              <PeopleCard key={i} name={person.name} age={person.age} gender={person.gender} id={person.id} />
            );
          })}
        </div>
      </>
    );
  }
}

export default ViewPeople;