import React from 'react'
import './whatido.scss'
const Whatido = () => {

    const whatdata = [
        {
             icon:<i className="fa-brands fa-connectdevelop"></i>,
             name:" design",
             
            },
            {
                icon:<i className="fa-brands fa-dev"></i>,
                name:" development",

        },
        {
             icon:<i className="fa-solid fa-layer-group"></i>,
             name:" application",

        },
    ]

  return (
    <div className='whatido container ' >
        
         <div className="text">
             <h1>What i do</h1>
         </div>
           
           <div className="box-grupe">

            {
                 whatdata.map((item)=>(
                     <WhatIdobox item={item} />
                 ))
            }
           </div>


    </div>
  )
}

export default Whatido


function  WhatIdobox({item}) {
    
     return(
         <div className="whatidobox">
              <div className="box">

                <span>{item.icon}</span>
                 <h2>web <br />
                     {item.name}
                  </h2>
              </div>
         </div>
     )
}