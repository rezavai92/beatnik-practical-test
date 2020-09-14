import React from 'react'
import './numberbox.css'


const NumberBox=(props)=>{

   


    return(
        <div className="number-box" >                     
        <div className="number">
            {props.text1}
        </div>
        <div className ="text">
            {props.text2}
        </div>
        </div>
    )
}


export default NumberBox;