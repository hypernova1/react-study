import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({products}) => (
  products ? <RenderProducts products={products} /> : <RenderLoading />
)

const RenderProducts = ({ products }) => (
  products.map(product => (
    <div className="product" key={product.id}>
      <Link className="productImg" to={`/item/${product.id}`}>
        <img src={product.image} alt="food" />
      </Link>
      <div className="productName">
        <p className="productTitle">{product.name}</p>
      </div>
      <hr />
      <p className="productPrice">{product.price.toLocaleString()} 원</p>
    </div>
  ))
);

const RenderLoading = props => (
  <div>Loading...</div>
)

export default Main;