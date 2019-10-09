import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="inner">
      <Link to="/">Shopping Maill</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </div>
)

export default Navigation;
