import React from 'react'
import './hero.scss'
const Herosection = () => {
  return (
    <div className='hero-section container' >  
        
        <div className="left">
            <h1>hi iam raisul <br />
             i am a developer
            </h1>
             <p>Frontend Developer</p>
             <div className="btn-grupe">
              <Button1/>
              <Button2/>
             </div>
        </div>
      
      <div className="right">
           <img src="/img/image1.jpg" alt="" />
      </div>

    </div>
  )
}

export default Herosection




function Button1() {
  
   return(
       
    <div className="button1 button ">
        <button>download cv</button>
    </div>
   )
}

function Button2() {
  
   return(
       
    <div className="button2  button">
        <button>lern more</button>
    </div>
   )
}