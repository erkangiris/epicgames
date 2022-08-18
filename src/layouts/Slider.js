import React, { useEffect, useState } from 'react'
import SliderBig from '../assets/img/s1.jpg'
import add_ikon from '../assets/img/add.svg'




function Slider() {

  const [gamesthumb,setGamesthumb] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:8000/games')
    .then((response) => response.json())
    .then((data) => {
      setGamesthumb(data)
    });
  },[])

  return (
    <section className='slider'>
        <div className='slider__big'>
            <img src={SliderBig} alt="Slider"  className='slider__big__image' />
            <div className='slider__big__text'>
                <span className='slider__big__promotext'>LAST CHANCE TO PRE-PURCHASE</span>
                <p className='slider__big__detail'>Unlock early game content, including three-suit pack, early access to the Spider-Drone Gadget, and Five Skill Points.</p>
                <span className='slider__big__price'>Starting at TRY 499.00</span>
                <div className='slider__big__buttons'>
                    <button className='slider__big__buy'>Pre-Purchase Now</button>
                    <button className='slider__big__wishlist'><img src={add_ikon} alt="Add to Wishlist" width="20" />Add to Wishlist</button>
                </div>
            </div>
        </div>
        <div className="slider__thumbs">
          <ul>
            {
              gamesthumb &&  gamesthumb.map((game) => <li key={game.id}><img src={game.cover} alt={game.name} /><span>{game.name}</span></li>)
            }
          </ul>
        </div>

        <div>

      </div>
  


    </section>
  )
}

export default Slider