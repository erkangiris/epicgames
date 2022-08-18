import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {add} from '../store/BasketReducer'
import { useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function GameDetail() {
    const location = useLocation().pathname;
    const [game,setGame] = useState(null)
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket.items)


    useEffect(()=>{
            fetch(`http://localhost:8000${location}`)
            .then((response) => response.json())
            .then((data) => {
              setGame(data)
            });
    },[location])


  return (
    <>
        {
        game && 
            <div className='gamedetail'>
              <div className="gamedetail__detail">
                  <h1>{game.name}</h1>
                  <div className='gamedetail__gallery'>
                      <div className='gamedetail__poster'><img src={game.images[0]} alt={game.name} /></div>
                      <ul className='gamedetail__thumbs'>
                        {
                          game.images.map((image,index) => <li key={index}><img src={image} alt={game.name} /></li>)
                        }
                      </ul>
                  </div>
                  <h2 className='gamedetail__detail--title'>{game.title}</h2>
                  <p className='gamedetail__detail--text'>{game.text}</p>
              </div>
              <div className="gamedetail__pay">
                <strong className="gamedetail__pay--tag">STANDART GAME</strong>
                <span className="gamedetail__pay--name">{game.name}</span>
                <span className='gamedetail__pay--price'>TRY {game.price}</span>
                {
                  basket.find(item => item.id === game.id) ? <Link to="/cart" className='gamedetail__pay--view'>VIEW ON CART</Link> : <button onClick={() => dispatch(add({id:game.id,name:game.name,price:game.price, cover:game.cover}))} className="gamedetail__pay--buy">ADD TO CART</button>
                }
                
                <ul>
                  <li><span>Publisher</span><span>{game.publisher}</span></li>
                  <li><span>Release Date</span><span>{game.releasedate}</span></li>
                  <li><span>Platform</span><span>{game.platform}</span></li>
                </ul>
              </div>
                
                
            </div>
        }
    </>
  )
}

export default GameDetail