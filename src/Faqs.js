import React from 'react';
import './Faqs.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import img_1 from "./images/img_1.jpg";



export const Faqs = () => (
    <>
        <div className="con_5_1">
            <h1 className="h1_5_1">FAQs</h1>
            <button className="button_5_1">Home → Project Details</button>
        </div>
        <Container>
            <p className="p_5_1">Asked Question</p>
            <h3 className="h3_5_1">Have Your Any Question<br/> Look Here Now</h3>
            <button class="accordion" style={{'margin-top': '500px' }}>Do you have a satisfaction guarantee?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">Do you bring equipment and cleaning supplies?</button>
            <div class="panel">
                <p>Beginning midste the green fowler over in there have could forth doning moving<br/>
                     firmament fruitful fruitful thin every appear and pretty called saying dominion kind two<br/>
                      good very own abundantly the female yielding forth. From kleen greater fifth him..</p>
            </div>

            <button class="accordion">How will you gain access to my home?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">What services do house cleaners provide?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">What is a perfect price for house cleaning?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">How much do you charge what does that cover?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">Do you provide the cleaning supplies?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">How many years have you been in business?</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </Container> 
        <Container className="brd_5_1">
            <h5 className="h5_5_1">Have Any Query?</h5><br/>
            <form>
                <input type="text" id="defaultFormLoginTextEx" className="form-control"  value="Enter Your Name" style={{'border': 'none' , 'background':'#EEEFF2'}}/><br/>
                <input type="email" id="defaultFormLoginEmailEx" className="form-control" value="Your email" style={{'border': 'none', 'background':'#EEEFF2'}}/><br/>
                <input type="textarea" id="defaultFormLoginTextEx" className="form-control"  value="Write Message"  className="textarea_4_1" style={{'border': 'none', 'background':'#EEEFF2'}}/><br/>
                <div>
                    <Button className="button_5_2" type="submit">Submit Requaest</Button>
                </div>
            </form>
        </Container>  
        <Container className="brd_5_2">
            <img className="img_5_1" src={img_1} />
        </Container> 
        <Container>
        <div className="con_5_2">
            <h1 className="h1_5_2">Get To Know Free Estimate?</h1>
            <p className="p_5_2">Lights heaven above images blessed given tools</p>
            <p className="p_5_3">More Information</p>
            <button className="button_5_3">Get Free Estimate</button>
        </div>
        </Container>
    </>
)  