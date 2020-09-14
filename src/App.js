import React from 'react'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Rectangle from './components/rectangle/rectangle'
import  {LoremIpsum} from 'react-lorem-ipsum'
import Title from './components/title/title'
import './App.css'
import Footer from './components/footer/footer'
import Experience from './components/experience'
import Card from './components/Cards/cards'
import Team from './components/Team/team'
const App =()=>{

  


  return (
    <div>
       <div className="cover"> 
       <div class="search-icon">
         <FontAwesomeIcon icon={faSearch} color="white" />
         
       </div>
       <div className="talk-button" > 
                    <div className="button-text" >contact us</div>
              </div>

       <div className="about-us" >                                                            
       <Title rectWidth="230px" fontSize="50px" titleWidth="250px" text="ABOUT US" ></Title>
        
       </div>
      

     </div>
    
  <div>
<Experience>

</Experience>

</div>

 <div className ="card">
  <Card>

 </Card>

</div>
  <div className="client">
    <Title rectWidth ="230px" fontSize="45px" titleWidth ="250px" text="Our Clients" > </Title>
  </div>

<div className="client-logo-flex">
  <div  >
    <img width="80%" src={require('./resources/client icons/samsung.png')} />
  </div>

  <div >
  <img  width="60%" src={require('./resources/client icons/ocula.png')} />
  </div>

  <div >
  <img width="60%" src={require('./resources/client icons/nvidia.png')} />
</div>
<div >
<img width="60%" src={require('./resources/client icons/epson.png')} />
</div>
<div >
<img width="50%" src={require('./resources/client icons/dell.png')} />
</div>
<div >
<img width="50%" src={require('./resources/client icons/cisco.png')} />
</div>
<div style={{color:"#5a5b5c" ,marginLeft:"30px" }}>
<img width="80%" src={require('./resources/client icons/amd.png')} />
</div>

</div>

  <div className="how-we-work">

      <Title fontSize="45px" rectWidth ="260px" titleWidth ="350px" text="How We Work"></Title>
      

  </div>
  <div className ="wrapper" > 

       <div className="pic">
         <img style={{}} src={require('./resources/brief.PNG')}/>
       </div>
        <div>
        <h3 className="text-col-header"> Briefing </h3>
        <p className="text-col-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit sed nunc, cursus non cursus vulputate elementum, rutrum. Aliquam porttitor ultrices sed mauris mi, tempor, eu. Arcu, massa id tortor purus ullamcorper quis. Vel aliquet habitant nisl suspendisse faucibus amet ut orci. Nascetur </p>
                  
        </div>
        <div>
        <h3 className="text-col-header">
          Ideation
        </h3>
         <p className="text-col-p">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit sed nunc, cursus non cursus vulputate elementum, rutrum. Aliquam porttitor ultrices sed mauris mi, tempor, eu. Arcu, massa id tortor purus ullamcorper quis. Vel aliquet habitant nisl suspendisse faucibus amet ut orci. Nascetur
         </p>
        </div>
        <div> <img src={require('./resources/ideation.PNG')}/> </div>
        <div> <img  src={require('./resources/dsign.PNG') } /> </div>
        <div> 
        <h3 className="text-col-header">
          Design
        </h3>
         <p className="text-col-p">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit sed nunc, cursus non cursus vulputate elementum, rutrum. Aliquam porttitor ultrices sed mauris mi, tempor, eu. Arcu, massa id tortor purus ullamcorper quis. Vel aliquet habitant nisl suspendisse faucibus amet ut orci. Nascetur
         </p>
        </div>
        <div>

        <h3 className="text-col-header">
          Development
        </h3>
         <p className="text-col-p">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit sed nunc, cursus non cursus vulputate elementum, rutrum. Aliquam porttitor ultrices sed mauris mi, tempor, eu. Arcu, massa id tortor purus ullamcorper quis. Vel aliquet habitant nisl suspendisse faucibus amet ut orci. Nascetur
         </p>
        </div>
        <div> <img src={require('./resources/development.PNG')}/> </div>
        <div> <img src={require('./resources/testing.PNG')}/> </div>
        <div>
        <h3 className="text-col-header">
          QA Testing
        </h3>
         <p className="text-col-p">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit sed nunc, cursus non cursus vulputate elementum, rutrum. Aliquam porttitor ultrices sed mauris mi, tempor, eu. Arcu, massa id tortor purus ullamcorper quis. Vel aliquet habitant nisl suspendisse faucibus amet ut orci. Nascetur
         </p>
        </div>
</div>
       
       <div className="what-we-provide">
       <Title fontSize="45px" rectWidth ="340px" titleWidth ="350px" text="What We Provide"></Title>
      

       </div>
       <div className="what-we-provide-grid"> 
        <div>
          <img src= {require('./resources/what we provide/1.png')} />
        </div>
        <div>
          <img src= {require('./resources/what we provide/2.png')} />
        </div>
        <div>
          <img src= {require('./resources/what we provide/3.png')} />
        </div>
        <div>
          <img src= {require('./resources/what we provide/4.png')} />
        </div>
        <div>
          <img src= {require('./resources/what we provide/5.png')} />
        </div>
        

       </div>
       <div className="meet-our-team">
         <Title fontSize="45px" rectWidth="340px" titleWidth="350px" text="Meet Our Team" ></Title>
          </div>
         <div class="team-wrapper">
         <Team> </Team>

         </div>

         <div className="recent-project">
           <div>       
              <Title fontSize="45px" rectWidth="340px" titleWidth="350px" text="Recent Projects" > </Title>
              </div>
              
              </div>


              <div  className='recent-project-grid'>
                <div className ="recent-project-grid-bg" >
                  <img  width="600px" height="300px" src={require('./resources/recent projects/1.png')} />
                  <h3 className="text-tick" > AR APP for OCULAS </h3>
                </div>
                <div className ="recent-project-grid-bg" >         
                <img width="600px" height="300px" src={require('./resources/recent projects/2.png')} />
                <h3 className="text-tick-1" > VR APP for GLITCH </h3>

                </div>     
              </div>

              <div className="wanna-talk" >
                  WANNA TALK ABOUT YOUR PROJECT?
              </div> 

              <div className="contact-us" > 
                    <div className="button-text" >contact us</div>
              </div>



                <div className="footer">
                
                  <Footer>

                  </Footer>
                </div>
         </div>

       
    

  )
}

export default App

/* 


    
*/