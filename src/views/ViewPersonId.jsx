import React from 'react';
import PeopleCard from '../components/PeopleCard';

class ViewPersonId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people/:id")
      .then(res => res.json())
      .then(ppl => this.setState({ people: ppl }))
  }

  render() {
    return (
      <>
        <h1>Studio Ghibli Character</h1>
        <div className="row m-2 d-flex">
          {this.state.people.map((person, i) => {
            return (
              <PeopleCard key={i} name={person.name} age={person.age} gender={person.gender} id={Child} />
            );
          })}
        </div>
      </>
    );
  }
}

function Child({ match }) {
  return (
      <p>ID: {match.params.id}</p>
  );
}

export default ViewPersonId;