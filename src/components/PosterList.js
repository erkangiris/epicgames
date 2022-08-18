import React, { useEffect, useState } from 'react'
import PosterView from './PosterView'





function PosterList() {

    const [games,setGames] = useState(null)

    useEffect(()=>{
      fetch('http://localhost:8000/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data)
      });
    },[])

  
  


  return (
    <div className='poster__list'>
        <div className='title'>
            <h2>Games on Sale</h2>
        </div>
        {games && <PosterView games={games} />}
    </div>
  )
}

export default PosterList