import "./App.css";
import "./cart.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 99,
          title: "Mobile Phone",
          qty: 1,
          id: 1,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        },

        {
          price: 998,
          title: "Watch",
          qty: 21,
          id: 2,
          img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80",
        },

        {
          price: 99,
          title: "Laptop",
          qty: 4,
          id: 3,
          img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80",
        },
      ],
    };
  }

  handelIncreaseQuantity = (product) => {
    console.log("heyyy", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handelDecreaseQuantity = (product) => {
    console.log("heyyy");
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      products[index].qty = 0;
    } else {
      products[index].qty -= 1;
    }
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((products) => {
      count += products.qty;
    });

    return count;
  };

  getCartTotal = () =>{
    const { products } = this.state;

    let totalcount = 0;
     // eslint-disable-next-line
    products.map((product)=>{
      totalcount = totalcount+ product.qty * product.price;
    })

    return totalcount;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handelDecreaseQuantity}
          onDeleteCart={this.handleDeleteProduct}
        />

        <div style={{fontSize:20, padding:10}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
