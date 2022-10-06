import React from 'react'
import './contact.scss'
const Cotact = () => {
  return (
    <div className='contact container ' >
       <div className="text">
        <h1>get in touch</h1>
       </div>
     <div className="wrapper">

       <div className="input-grupe">

       <div className="inputbox">
         <input type="text" placeholder='Enter your frist name' />
       </div>
       <div className="inputbox">
         <input type="text" placeholder='Enter your last name' />
       </div>
       <div className="inputbox">
         <input type="email" placeholder='Enter your Email' />
       </div>
       <div className="inputbox">
         <input type="number" placeholder='Enter your Number' />
       </div>   
       </div>
       <div className="text-area">
              <textarea name="text" id="" cols="30" rows="10" 
                placeholder='Enter your messages'
              ></textarea>
       </div>
       <div className="button">

       <button>submit</button>
       </div>
     </div>
    </div>
  )
}

export default Cotact