import React from 'react';
import {Link} from 'react-router-dom';


const Movie = ({title, url, id, getCurrent}) => {

  return(
    <Link to='/detail-movie'>
      <section className="wrapper-movie" onClick={() => getCurrent(id)}>
        <h2>{title}</h2>
        <img src={`https://image.tmdb.org/t/p/original/${url}`} alt={title} />
      </section>
    </Link>
  )
}

export default Movie;