import React from 'react'
import './about.scss'
const About = () => {

    const aboutdata = [
         {
            name:"Name",
            realname:"md raisul hasan redoy"
         },
         {
            name:"Email",
            realname:"raisul2334@gamil.com"
         },
         {
            name:"twitter",
            realname:"md raisul "
         },
         {
            name:"phone",
            realname:"12345678901"
         },
    ]

  return (
    <div  className='about container ' >
         <div className="heading">
             <h1>about</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo voluptate dolor alias earum at, a molestiae ut quaerat repellat minima ullam, adipisci consectetur explicabo labore doloremque maxime? Unde, error
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum itaque laborum magnam quae quam sint autem nobis exercitationem, consectetur quidem voluptatem, odit iure odio doloremque illum, cupiditate cum alias!
              </p>
         </div>
       
       <div className="about-grupe">
       {
         aboutdata.map((item)=>(
          <Aboutbox  item={item} />

         ))
       }
       </div>

    </div>
  )
}

export default About


function Aboutbox({item}) {

     return(
         <div className="aboutbox">
                 <div className="circle">
                   <span></span>
                 </div>
                  
                <div className="textbox">
                     <h4 className='name' >{item.name}</h4>
                      <h4 className='realname'>{item.realname}</h4>
                </div>
         </div>
     )
    
}