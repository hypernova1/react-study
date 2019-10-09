import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Navigation';
import Cart from '../Cart/Cart';
import Main from '../Main/Main';
import Item from '../Item/Item';
import data from 'MOCK_DATA.json';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      products: data,
      cart: [],
      quantity: 1,
      totalAmount: 0
    };
    // this.renderFoodDetail = this.renderFoodDetail.bind(this);
    // this.handleAddTocart = this.handleAddTocart.bind(this);
    // this.checkProduct = this.checkProduct.bind(this);
  };

  handleAddToCart = (selectedProduct) => {
    let cartItem = this.state.cart;
    let productID = selectedProduct.id;
    if(this.checkProduct(productID)) {
      let index = cartItem.findIndex(item => (
        item.id === productID
      ));

      cartItem[index].quantity += 1;
      this.setState({
        cart: cartItem
      })
    } else {
      cartItem.push(selectedProduct);
      this.setState({
        cart: cartItem,
        quantity: 1
      })
    }
  };

  renderFoodDetail = () => (
    this.state.products.map(product => (
      <Route
        key={product.id}
        exact
        path={`item/${product.id}`}
        render={props => (
          <Item
            addToCart={this.handleAddToCart}
            produtQuantity={this.state.quantity}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        )}
        />
    ))
  );
  
  checkProduct = id => {
    let cart = this.state.cart;
    return cart.some(item => (
      item.id === id
    ));
  };

  sumTotalAmount = () => {
    let cart = this.state.cart;
    let total = 0;
    cart.forEach(item => {
      total += item.price * Number(cart.quantity);
    })
    this.setState({
      totalAmount: total
    })
  }

  componentDidMount = () => {
    let cart = localStorage.cart;
    if(cart) {
      this.setState(current => ({
        cart: JSON.parse(cart)
      }), () => {
        this.sumTotalAmount();
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.cart !== this.state.cart) {
      localStorage.cart = JSON.stringify(this.state.cart);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Main
                  products={this.state.products}
                />
                  );
              }}
            />
            <Route
              exact
              path="/cart"
              render={props => (
                <Cart
                  cart={this.state.cart}
                  totalAmount={this.state.totalAmount}
                />
              )}
              />
            {this.renderFoodDetail()}
        </Switch>
      </div>
    );
  };
};

export default App;
