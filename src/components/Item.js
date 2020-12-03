import React from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from '../utils/not-found.jpg';

const Item = ({ item }) => {
  const { title, poster_path, id } = item;
  console.log(item);
  return (
    <Link to={`/detail-movie/${id}`}>
      <section className="wrapper__movies-item">
        <img src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : imgNotFound} alt={title} />
        <h2>{title} </h2>
        <section className="stars">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </section>

        <i className="far fa-heart"></i>
      </section>
    </Link>
  );
};

export default Item;
