import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 99,
          title: "Mobile Phone",
          qty: 1,
          id: 1,
        },

        {
          price: 998,
          title: "Watch",
          qty: 21,
          id: 2,
        },

        {
          price: 99,
          title: "Laptop",
          qty: 4,
          id: 3,
        },
      ],
    };
  }

  handelIncreaseQuantity = (product) => {
    console.log("heyyy",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })
  };

  handelDecreaseQuantity = (product) => {
    console.log("heyyy");
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      products[index].qty =0;
    }
    else{
    products[index].qty -= 1;
  }
    this.setState({
      products: products
    })
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem 
          product={product} 
          key={product.id} 
          onIncreaseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handelDecreaseQuantity}
          />;
        })}
      </div>
    );
  }
}
