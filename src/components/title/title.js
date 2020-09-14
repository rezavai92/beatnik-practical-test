import React from 'react'
import './title.css'
const Title =(props)=>{

    const rectStyle = {

        top:"18px",
    width: props.rectWidth,
    height: "28px",
    
    }
    const titleStyle ={

        top:"2px",
        width:props.titleWidth,
        height:"60px",
        fontSize:props.fontSize,
    }

    

    return(
    <div>

    <div>
    <div style ={rectStyle} className="rectangle">

     </div>
      <div style={titleStyle}  className="title">

            {props.text}

        </div>
        </div>


    
</div>
    )
    
   
}

export default Title