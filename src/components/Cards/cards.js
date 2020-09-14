import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import NumberBox from '../NumberBox/numberbox'
import NUmberBox from '../NumberBox/numberbox'
import './cards.css'


const Cards = ()=>{
    return (<div className="flex">

  <div>
  <NUmberBox text1="6+" text2="Years of Experience">

</NUmberBox>

  </div>


<div>
<NUmberBox text1="30+" text2="Satisfied Clients">

</NUmberBox>
</div>
<div>
<NumberBox text1="100+" text2="Successful Projects" >

</NumberBox>

</div>




 


    </div>
        )
}

export default Cards