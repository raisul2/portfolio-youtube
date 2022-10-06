import React from 'react'
import './navba.scss'
const Navbar = () => {

  const navlink = [
     {
       name:"about me"
     },
     {
       name:"services"
     },
     {
       name:"contact me"
     },
 

    ]

  return (
    <div className='navbar container '>
           
      <div className="left">
          <h3>logo</h3>
      </div>         
      <div className="right">
                {
                  navlink.map((item)=>(
                     <ul><li>{item.name}</li></ul>
                  ))
                }
 
      </div>         
      
    </div>
  )
}

export default Navbar