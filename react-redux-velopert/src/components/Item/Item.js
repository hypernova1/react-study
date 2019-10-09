import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {}
    };
  };

  addToCart = (image, name, price, id, quantity, checked) => {
    this.setState({
      selectedProduct: {
        image, name, price, id, quantity, checked
      }
    }, () => {
      this.props.addToCart(this.state.selectedProduct)
    })
  }
  
  render() {
    const { image, name, price, id, quantity } = this.props;
    return (
      <div className="container">
        <img
          className="itemImg"
          src={image}
          alt={name}
        />
        {name}
        <div className="itemPrice">{price}</div>
        <button
          color="primary"
          onClick={ this.addToCart(image, name, price, id, quantity) }
        >장바구니에 담기</button>
      </div>

    )
  }

}

export default Item;
