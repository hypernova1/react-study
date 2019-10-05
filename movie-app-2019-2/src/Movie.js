import React from 'react';
import PropType from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movies_move">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title" style={{ backgroundColor: 'black'}}>{title}</h3>
                <h5>{year}</h5>
                <p className="movie_summary">{summary}</p>
                <ul className="genres">{genres.map((genre, index) => (
                    <li className="genres_genre" key={ index }>{ genre }</li>
                ))}</ul>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
}

export default Movie;