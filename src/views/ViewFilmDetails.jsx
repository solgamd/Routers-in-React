import React from 'react';

const FilmDetails = (props) => {
  return (
    <section className="row">
      <h3 className="align-items-center text-black">Studio Ghibli: Film Details</h3>
      <p className="align-items-center text-black">#{props.match.params.film}</p>
    </section>
  );
}

export default FilmDetails;