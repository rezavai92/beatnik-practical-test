import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {faFacebookF,faTwitter,faPinterest,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './footer.css'
const footer =()=>{

    return (
        <div>
             <hr style={{width:"80%",textAlign:"left",marginLeft:"0" ,border:"1px solid #611F80"}}/>
             <div className="footer-grid" >
                 <div>
                     <p className="bozio" >Bozio</p>
                     <div className="five-brand-grid">
                     <FontAwesomeIcon icon={faFacebookF} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon ={faPinterest} />
                     <FontAwesomeIcon icon={faInstagram} />
                     
                     
                     </div>
                 </div>
                 
                <div>
                    <ul>
                        <li>
                        Krommebeekstraat
                        </li>
                        
                        <li>
                        14

                        </li>
                        <li>8930 Menen,</li>
                        <li>
                            Belgium

                        </li>
                    
                        <li>
                        +32 56 521 380
                        </li>
                        
                        <li>
                        info@company.io
                        </li>
                        
                    </ul>
                </div>
                
                 <div>
    
                 <ul>
                        <li>
                         Our Services
                        </li>
                        
                        <li>
                        About Us

                        </li>
                        <li>
                        Portfolio
                        </li>
                        <li>
                        Teams

                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            For Personal
                        </li>
                    
                       
                        
                        
                        
                    </ul>


                 </div>
                
              <div>
                   <ul>
                        <li>
                        Home
                        </li>
                        
                        <li>
                        Map

                        </li>
                        <li>
                        Accessibility
                        </li>
                        <li>
                        Privacy Policy

                        </li>
                        Contact
                    
                       
                        
                        
                        
                    </ul>

                </div>

                <div>
                    <label>Subscribe For newsletter</label>
                    <Form.Group>
                      <Form.Control size="lg" type="text" placeholder="Type Your Email" />
                      <Button>Send</Button>
  
                    </Form.Group>
                </div>
             </div>
        

        </div>
    )
}

export default footer;