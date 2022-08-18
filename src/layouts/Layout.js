import React from 'react'
import Header from './Header'
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from 'react-router-dom'



function Layout({children}) {


  const location = useLocation();


  return (
    <>
        <Header />
        <main className="container">
            {location.pathname === '/cart' ? null : <Breadcrumb />}
            {children}
        </main>


    </>
  )
}

export default Layout
