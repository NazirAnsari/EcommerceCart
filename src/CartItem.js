import React from "react";

export default class CartItem extends React.Component {

  // oneFunction(value) {
    // if (value === '+') {
    //   this.setState({
    //    qty:parseInt(this.state.qty)+(1),
    //   });
    // }
    // else if(value === '-'){
    //     if(this.state.qty>0){
    //     this.setState({
    //         qty:this.state.qty-1
    //     })
    // }
    
    // }
    // value === '+' ? this.setState({ qty :parseInt(this.state.qty)+1 }): this.setState({ qty :this.state.qty-1})
    
  //   this.setState({
  //       qty : (value==='+' ? parseInt(this.state.qty)+1 :(this.state.qty ===0 ? 0 :this.state.qty-1) ) 
  //   })
  // }


  render() {
    console.log(this.props)
    const { qty, price, title ,img} = this.props.product;
    return (
      <>
        <div className="cart-item">
          <div className="left-block">
            {/* eslint-disable-next-line */}
            <img style={styles.img} src={img} />
          </div>

          <div className="right-block">
            <div className="title" style={{ fontSize: 20 }}>
              {title}
            </div>
            <div className="mobilenumber" style={{ color: "blue" }}>
              {"Rs "}{price}
            </div>
            <div className="quantiy" style={{ color: "green" }}>
             {"Qty :"} {qty}
            </div>
            <div className="cart-item-actions">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
                alt="increase"
                className="action-icons"
                onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
                alt="decrease"
                className="action-icons"
                onClick={() => this.props.onDecreaseQuantity(this.props.product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="delete"
                className="action-icons"
                onClick={()=> this.props.onDeleteCart(this.props.product.id)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  img: {
    height: "200px",
    width: "300px",
    background: "#ccc",
    border: "2px solid black",
    borderRadius: "4px",
  },
};
