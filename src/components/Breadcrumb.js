import React from 'react'
import {Link} from 'react-router-dom'
import arama_ikon from '../assets/img/search.svg'
import { useSelector} from 'react-redux'

function Breadcrumb() {
  const basket = useSelector((state) => state.basket.items)

  return (
    <section className='breadcrumb'>
        <div className="breadcrumb__search">
            <img src={arama_ikon} alt="Logo" width="20" />
            <input type="search" placeholder="Search" />
        </div>
        <nav className="breadcrumb__menu">
            <Link to="" className='active'>Discover</Link>
            <Link to="">Browse</Link>
            <Link to="">News</Link>
        </nav>
        { basket.length > 0 && <div className="breadcrumb__cart"> <Link to="/cart">Cart<span>{basket.length}</span></Link></div>}
    </section>
  )
}

export default Breadcrumb