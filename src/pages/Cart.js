import React, { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {remove} from '../store/BasketReducer'


function Cart() {
  const basket = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()
  const [basketitems,setBasketitems]= useState([])
  

  useEffect(()=>{
    setBasketitems(basket)
},[basket])

    let oldprice = 0
    basketitems.map((item)=>  oldprice += parseInt(item.oldprice))

    let newprice = 0
    basketitems.map((item)=>  newprice += parseInt(item.price))

    let discount = oldprice - newprice
    
  return (
    <div className='cart'>
      <div className='cart__games'>
        <h1>Shopping Cart</h1>

      {basket.length === 0 ?
      <div className='cart__empty'>
        <h2>Your Cart Empty</h2>
      </div>
      :
        basket.map((item) => (
          <div className='cart__games__card' key={item.id}>
            <figure><Link to={`/games/${item.id}`}><img src={item.cover} alt={item.name} /></Link></figure>
            <div>
              <strong className='cart__games__card--tag'>STANDART GAME</strong>
              <span className='cart__games__card--name'>{item.name}</span>
              <span className='cart__games__card--platform'>Platform: XBOX</span>
              <span className='cart__games__card--price'>{item.oldprice > item.price &&  <span className="prices--old"><span className="prices--discount">%{Math.round(((parseInt(item.oldprice) - parseInt(item.price)) / parseInt(item.oldprice))*100)}</span><span className="prices--discount-old">TRY{item.oldprice}</span></span>}TRY {item.price}</span>
              <button onClick={() => dispatch(remove(item.id))} className='cart__games__card--remove'>Remove</button>
            </div>
          </div>
        ))
      }
      </div>
      
        <div className='cart__buy'>
          <div className="gamedetail__pay">
          <span className="gamedetail__pay--name">Games and Apps Summary</span>
          <ul>
              <li><span>Price</span><span>TRY {oldprice}</span></li>
              <li><span>Sale Discount</span><span>-TRY {discount}</span></li>
              <li><span>Taxes</span><span>Calculated at Checkout</span></li>
            </ul>
            <div className="gamedetail__pay--total">
              <span>Total</span>
              <span>TRY {newprice}</span>
            </div>
          </div>
          <button className="gamedetail__pay--buy">CHECK OUT TRY {newprice}</button>
        </div>
    

    </div>
  )
}

export default Cart