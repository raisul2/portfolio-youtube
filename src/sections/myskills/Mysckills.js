import React from 'react'
import './myscills.scss'
const Mysckills = () => {

  const skillsdata = [
    {
       name:"html",
       number:"80",
    },
    {
       name:"css",
       number:"80",
    },
    {
       name:"react js",
       number:"80",
    },
    {
       name:"node js",
       number:"60",
    },
  ]
  return (
    <div className='mysckills container ' >
     
          <div className="text">
             <h1>My skiclls</h1>
          </div>
        
        <div className="skill">

      <div className="box-grupes">
          {
          skillsdata.map((item)=>(
             <Myskillsbox item={item} />
          ))
          }
      </div>
        </div>


    </div>
  )
}

export default Mysckills




function  Myskillsbox({item}) {


  
   return(
     <div className="skillsbox">
            
            <h1>{item.number}%</h1>
             <span>{item.name}</span>

     </div>
   )
}