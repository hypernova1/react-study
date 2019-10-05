import React from 'react';
import PropTypes from 'prop-types';

const foorILike = [
  {
    id: 1,
    name: 'kim',
    rating: 1
  },
  {
    id: 2,
    name: 'park',
    rating: 2
  },
  {
    id: 3,
    name: 'choe',
    rating: 3
  }
];


function renderFood(dish) {
  console.log(dish)
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function Food({ name, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <div>{rating}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      {foorILike.map(renderFood)}
    </div>
  );
}

export default App;
