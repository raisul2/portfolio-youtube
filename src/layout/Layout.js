import React from 'react'
import About from '../sections/about/About'
import Cotact from '../sections/contact/Cotact'
import Herosection from '../sections/herosection/Herosection'
import Mysckills from '../sections/myskills/Mysckills'
import Navbar from '../sections/navbar/Navbar'
import Whatido from '../sections/whatido/Whatido'
import './layout.scss'
const Layout = () => {
    return (
    <div className='layout' >
       <Navbar/>
       <Herosection/>
       <About/>
       <Whatido/>
       <Mysckills/>
       <Cotact/>
    </div>
  )
}

export default Layout