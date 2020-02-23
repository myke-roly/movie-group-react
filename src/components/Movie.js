import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({title, url, id, getCurrent}) => {

  return(
    <Link to={`/detail-movie/${id}`}>
      <section className="wrapper-movie" onClick={() => getCurrent(id)}>
        <img src={`https://image.tmdb.org/t/p/original/${url}`} alt={title} />
        <h2>{title}</h2>
      </section>
    </Link>
  )
}

export default Movie;