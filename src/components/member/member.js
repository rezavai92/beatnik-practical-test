import React from 'react'
import './member.css'
const member =(props)=>{
return(
    <div className="container">
        <img src={props.source}/>

        <div className="overlay">                                        
        <div   className="text">{props.name} </div>
        <div className="text">{props.designation}</div>
          </div> 
    
      </div>
)


    
}

export default member;