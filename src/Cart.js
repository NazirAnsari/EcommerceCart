import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
  constructor()
  {
    super()

    this.state={
      products :[
        {
        price : 99,
        title :"Mobile Phone",
        qty :1,
        id :1
      },

      {
        price : 998,
        title :"Watch",
        qty :21,
        id :2
      },

      {
        price : 99,
        title :"Laptop",
        qty :4,
        id :3
      },
    ]
    }
  }
  render() {
    const {products}=this.state;
    return (
      <div className='cart'>
        {
          products.map((product)=>{
           return <CartItem product={product} key={product.id}/>
          })
        }
      </div>
    )
  }
}
