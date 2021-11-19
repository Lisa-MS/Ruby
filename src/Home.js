import React from 'react';
import Background from './images/Homepage_02_1.png';
import './Home.css';
import {Project} from './Project';
import {Faqs} from './Faqs';
import img from "./images/img.jpg";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Homepage_02_2 from "./images/Homepage_02_2.png";
import Homepage_02_3 from "./images/Homepage_02_3.png";
import Homepage_02_4 from "./images/Homepage_02_4.png";
import Homepage_02_5 from "./images/Homepage_02_5.png";
import icon_1 from "./images/icon_1.png";
import icon_2 from "./images/icon_2.png";
import icon_3 from "./images/icon_3.png";
import icon_4 from "./images/icon_4.png";
import icon_5 from "./images/icon_5.png";


export const Home = () => (
    <>
    <Container style={{'position': 'relative' }}>
        <img src={ Background } className="App-img"/>
        <h1 className="Home.css"> We Are Certified  <br/> Cleaning Company</h1>
        <p className="p_1">Quisque suscipit ipsum est, eu venenatis leo ornare eget. 
            Ut porta <br /> facilisis elementum.
             Sed condimentum sed massa quis <br />  ullamcorper. Donec at scelerisque.</p>
        <button  href="./faqs" component={Faqs} style={{'margin-top': '-200px','margin-left':'-470px'}} >REQUAEST A QUOTE</button>     
        <img className="img1"
                src={img}
                alt="img"
                 />
    </Container>
        <Container >
            <Row>
                <Col style={{'marginRight': '-45px' }}>
                    <Card className="card">
                        <Card.Img variant="top" src={img} className="cardImg"/>
                        <Card.Body>
                            <Card.Title><h2><span style={{'font-weight': 'bold'}} >Residential</span> Cleaning</h2></Card.Title>
                            <Card.Text style={{'margin-top': '20px', 'color': '#bababa'}}>
                            Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed.                   
                            </Card.Text>
                            <table>
                                <tr>
                                    <td>
                                    <ul type="square">
                                        <li>Kitchen</li>
                                        <li>Bathrooms</li>
                                        <li>Bed&Livingrooms</li>
                                        <li></li>
                                    </ul>
                                    </td>
                                    <td className="line">
                                    <ul type="square">
                                        <li>Carpet</li>
                                        <li>Seasonal</li>
                                        <li>Move in/out</li>
                                        <li></li>
                                    </ul>
                                    </td>
                                </tr>
                            </table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{'marginLeft': '-45px'}}>
                    <Card className="card1" >
                        <Card.Img variant="top" src={img} className="cardImg1"/>
                        <Card.Body>
                            <Card.Title><h2><span style={{'font-weight': 'bold'}} >Commercial</span> Cleaning</h2></Card.Title>
                            <Card.Text style={{'margin-top': '20px', 'color': '#bababa'}}>
                            Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed.                   
                            </Card.Text>
                            <table>
                                <tr>
                                    <td>
                                    <ul type="square">
                                        <li>Office</li>
                                        <li>Shop</li>
                                        <li>Medical Facilities</li>
                                        <li></li>
                                    </ul>
                                    </td>
                                    <td className="line">
                                    <ul type="square">
                                        <li>Restaurant</li>
                                        <li>Warehause</li>
                                        <li>Airport</li>
                                        <li></li>
                                    </ul>
                                    </td>
                                </tr>
                            </table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <button href="" style={{'margin-top': '30px','margin-left': '-35px', 'position':'relative'}} >GET FREE ESTIMATE</button><br /><br /><br /><br /><br />
        </Container>
       
        <Container>
            <Row>
                <Col md={7}>
                    <img className="img_2"
                    src={Homepage_02_2}
                    alt="img"
                    />
                    <h6 style={{'margin-top': '-180px','margin-left': '60px'}}>We Are 24/7 Available</h6>
                    <h3 className="h3_1">936-303-9591, 936-303-9591</h3>
                    <img src={img} className="img_1"/>
                </Col>
                <Col md={5}>
                    <p className="p_2">About Us</p>
                    <h3>Professioanl<br /> 
                        Cleaning Services</h3>
                    <p className="p_3">
                    Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium 
                    suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non
                     porttitor. Pellentesque vehicula est a lorem.
                    </p>
                    <table className="table_1">
                            <tr>
                                <td>
                                <ul type="square">
                                    <li>100% Secured</li>
                                    <li>Well Disciplined</li>
                                </ul>
                                </td>
                                <td>
                                <ul type="square">
                                    <li>24/7 Services</li>
                                    <li>Online PAyment</li>
                                </ul>
                                </td>
                            </tr>
                        </table>
                    <button href="" variant="primary" style={{'left': '-90px'}} > Learn More </button>
                </Col>
            </Row>
        </Container>
        <Container className="con_1">
            <h6 style={{'margin-left': '160px','top': '100px'}}>Services</h6><br/>
            <h3 className="h3_2">Provide World Wide For<br/>
            Good Customer
            </h3>
        <Row>
            <Col>
                <Card className="card2_1" style={{ 'margin-left': '160px'}}> 
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Deep Cleaning</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non 
                        elit  porttitor, vitae volutpat nibh.            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card2_1" style={{ 'margin-left': '5px'}}>
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Hausekeeping</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non 
                        elit  porttitor, vitae volutpat nibh.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card2_1" style={{ 'margin-left': '-80px'}}>
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Window Cleaning</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non 
                        elit  porttitor, vitae volutpat nibh.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
         <Row >
            <Col>
                <Card className="card2_2" style={{'margin-left': '160px'}}> 
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Cloth Washing</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non 
                        elit  porttitor, vitae volutpat nibh.      
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card2_2" style={{ 'margin-left': '5px'}}>
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Regular Cleaning</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non
                        elit  porttitor, vitae volutpat nibh.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card2_2" style={{ 'margin-left': '-80px'}}>
                    <Card.Img variant="top" src={img} className="cardImg2"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Dish Wash</Card.Title>
                        <Card.Text className="cardText">
                        Vestibulum commodo sapien non 
                        elit  porttitor, vitae volutpat nibh.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
        </Container>
        <Container >
            <h6 style={{'margin-top': '40px'}}>Proces</h6>
            <h3 className="h2_1">How it Work</h3>
            <table className="table_2">
                <tr>
                    <td>
                        <img src={icon_1} className="img_3"/>
                        <h6 className="h6_2">Account & Check In</h6>
                        <p className="p_6">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={icon_2} className="img_3"/>
                        <h6 className="h6_2">Choose Category</h6>
                        <p className="p_6">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={icon_3} className="img_3"/>
                        <h6 className="h6_2">Get Clean Property</h6>
                        <p className="p_6">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
            </table>
            <div className="table_2_2_">
            <img src={img} className="img_4"/>
            <img src={Homepage_02_3} className="img_5"/>
            <h6 className="h6_3">Ensure Quality of<br/>Work</h6>
            <p className="p_7">
            Nunc scelerisque tincidunt elit.<br/>
            Vestibulum ipsum. Cras pretium<br/> 
            suscipit tellus sit amet.
            </p>
            <button variant="primary" style={{'margin-left': '560px' , 'margin-top': '-150px'}}><a  href="./Project" component={Project} style={{'text-decoration': 'none', 'color':'#14396d'}}>Learn More</a> </button>
            </div>
        </Container>
        <Container>
            <h6 style={{'margin-top': '90px'}}>Features</h6>
            <h3 className="h2_2">Why We Are Best</h3>
            <img src={Homepage_02_4} className="img_6"/>
            <img src={img} className="img_7"/>
            <div>
                <h6 className="h6_4" style={{'margin-top': '-370px','margin-left': '640px'}}>Expert Emplyee</h6>
                <p className="p_8" style={{'margin-top': '-340px','margin-left': '640px'}}>Vestibulum commodo<br/>
                sapien non elit  porttitor,<br/>
                itae volutpat nibh</p>
            </div>
            <div>
                <h6 className="h6_4" style={{'margin-top': '-370px','margin-left': '830px'}}>Affordable Package</h6>
                <p className="p_8" style={{  'margin-top': '-340px','margin-left': '830px'}}>Vestibulum commodo<br/>
                sapien non elit  porttitor,<br/>
                vitae volutpat nibh</p>
            </div>
            <div>
                <h6 className="h6_4" style={{'margin-top': '-200px','margin-left': '640px'}}>100% Satisfication</h6>
                <p className="p_8" style={{  'margin-top': '-170px','margin-left': '640px'}}>Vestibulum commodo<br/>
                sapien non elit  porttitor,<br/>
                vitae volutpat nibh</p>
            </div>
            <div>
                <h6 className="h6_4" style={{'margin-top': '-200px','margin-left': '830px'}}>24/7 OT Support</h6>
                <p className="p_8" style={{  'margin-top': '-170px','margin-left': '830px'}}>Vestibulum commodo<br/>
                sapien non elit  porttitor,<br/>
                vitae volutpat nibh</p>
            </div>
        </Container>
        <Container >
            <div className="con_2"></div>
            <p className="p_12">Portfolio</p><br/>
            <h3 className="h3_3">Introduce Our<br/>Project</h3>
            <p className="p_13">
            Nunc scelerisque tincidunt elit.<br/>
            Vestibulum non mi ipsum. Cras<br/>
            pretium suscipit tellus.
            </p>
            <Row>
                <Col>
                    <Card className="card3_1" style={{'margin-left': '660px'}}> 
                        <Card.Img variant="top" src={img} className="cardImg2"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Webtend IT Solutions, Inc.</Card.Title>
                            <Card.Text className="cardText_1">
                            Window Cleaning    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card3_1" style={{'margin-left': '580px'}}>
                        <Card.Img variant="top" src={img} className="cardImg2"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Hasib Eco Lodge</Card.Title>
                            <Card.Text className="cardText_1">
                            Housekeeping
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card3_1" style={{'margin-left': '502px'}}>
                        <Card.Img variant="top" src={img} className="cardImg2"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Saddam Eco Garden</Card.Title>
                            <Card.Text className="cardText_1">
                            Cloth Washing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            <h6 style={{'margin-top': '240px','margin-left': '530px'}}>Booking</h6><br/>
            <h3 className="h3_4">Make An Appointment</h3>
            <div >
                <img src={Homepage_02_5} className="img_8"/></div>
                <img src={img} className="img_9"/>
                <img src={icon_4} className="img_10"/>
                <p className="p_16">Call Us</p>
                <h3 className="h3_5">936-303-959</h3>
        </Container>
        <Container>
            <Row>
                <Col md="4">
                    <form className="form"> 
                    <p className="p_15" >Request a Quote</p>
                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control"  value="Enter Your Name"/><br/>
                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value="Your email"/><br/>
                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control"  value="Phone"/><br/>
                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control"  value="I would like to" color="#14396d"/><br/>
                    <div>
                        <button  type="submit" style={{'margin-left':'-480px','margin-top':'0px'}}>Submit Requaest</button>
                    </div>
                    </form>
                </Col>
            </Row>
        </Container>
        <Container>
            <img src={icon_5} className="img_11"/>
            <p className="p_17">Testimonials</p><br/>
            <h3 className="h3_6">Our Some Customer</h3>
            <img src={img} className="img_12"/>
            <img src={img} className="img_13"/>
            <img src={img} className="img_14"/>
            <img src={img} className="img_15"/>
            <h5 className="h5_1">Perfect Cleaning Service</h5>
            <p className="p_18">Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. <br/>
            Cras pretium suscipit tellus sit amet aliquet. <br/>
            Vestibulum maximus lacinia massa non porttitor. Pellentesque<br/> 
            vehicula est a lorem gravida bibendum. </p>
            <p className="p_19">Chad S. Jones</p>
            <p className="p_20">House Owner</p>
        </Container>
    </>
)