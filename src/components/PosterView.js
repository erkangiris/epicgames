import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {add} from '../store/BasketReducer'
import { useSelector} from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function PosterView(props) {
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket.items)

    const games = props.games



  return (
    <div className='poster__view'>
        <Swiper
        spaceBetween={30}
        slidesPerView={5}>
        {games.map((game) => (
            <SwiperSlide key={game.id}>
            <div>
                <figure><Link to={`/games/${game.id}`}><img src={game.cover} alt="Alt" /></Link></figure>
                <h3>{game.name}</h3>
                <div className="prices">
                    {game.oldprice > game.price &&  <span className="prices--old"><span className="prices--discount">%{Math.round(((parseInt(game.oldprice) - parseInt(game.price)) / parseInt(game.oldprice))*100)}</span><span className="prices--discount-old">TRY{game.oldprice}</span></span>}
                    <span className="prices--new">TRY {game.price}</span>
                </div>
                {
                    basket.find(item => item.id === game.id) ? <button><Link to="/cart" className='poster__view--view'>View Cart</Link></button> : <button onClick={() => dispatch(add({id:game.id,name:game.name,price:game.price, cover:game.cover, oldprice:game.oldprice}))}>Add to Cart</button>
                } 
            </div>    
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default PosterView