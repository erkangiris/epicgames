import React from 'react'
import { useSelector } from 'react-redux'



function Faq() {
  const add = useSelector((state) => state.AddtoCart)
  console.log(add)

  return (
    <>Faq</>
  )
}

export default Faq