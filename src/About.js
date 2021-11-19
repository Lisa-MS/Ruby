import React from 'react';
import './About.css';
import {Team} from './Team';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import img from "./images/img.jpg";
import icon from "./images/icon.png";
import Homepage_02_2 from "./images/Homepage_02_2.png";
import icon_1 from "./images/About/icon_1.png";
import icon_2 from "./images/About/icon_2.png";
import icon_3 from "./images/About/icon_3.png";
import icon_4 from "./images/About/icon_4.png";
import icon_1_1 from "./images/icon_1.png";
import icon_1_2 from "./images/icon_2.png";
import icon_1_3 from "./images/icon_3.png";
import icon_5 from "./images/About/icon_5.png";
import Homepage_02_3 from "./images/Homepage_02_3.png";
import About_1 from "./images/About/About_1.png";


export const About = () => (
    <>
        <div className="con_1_1">
            <h1 className="h1_1_1">About Us</h1>
            <button className="button_1_1">Home → About Us</button>
        </div>
        <Container>
            <Row>
                <Col md={7}>
                    <img className="img_1_2"
                    src={Homepage_02_2}
                    alt="img"
                    />
                    <h6 style={{'top': '-180px','left': '70px'}}>We Are 24/7 Available</h6>
                    <h3 className="h3_1_1">936-303-9591, 936-303-9591</h3>
                    <img src={img} className="img_1_1"/>
                </Col>
                <Col md={5}>
                    <p className="p_1_2">About Us</p>
                    <h3 className="h3_1_2">Professioanl<br /> 
                        Cleaning Services</h3>
                    <p className="p_1_3">
                    Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium<br/> 
                    suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non<br/>
                     porttitor. Pellentesque vehicula est a lorem.
                    </p>
                    <table className="table_1_1">
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
                    <button variant="primary" style={{'margin-left': '-555px'}}><a href="./team" component={Team} style={{'text-decoration': 'none', 'color':'#14396d'}}>Learn More</a> </button>
                </Col>
            </Row>
            <img src={icon} className="img_1_3"/>
        <div className="con_1_2">
        </div>
        </Container>
        <Container >
            <p className="p_1_4">Features</p>
            <h2 style={{'margin-top': '0px','margin-left': '400px'}}>Why We Are Best</h2>
            <Row>
                <Col>
                    <Card className="card_1_1">
                        <Card.Img variant="top" src={icon_1} className="cardImg_1_1"/>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_2">Expert Emplyee</h2></Card.Title>
                            <Card.Text style={{'margin-top': '60px', 'margin-left': '10px', 'color': '#14396d'}}>
                            Vestibulum commodo<br/>
                             sapien non elit  porttitor,<br/>
                              vitae volutpat nibh.                   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_1">
                        <Card.Img variant="top" src={icon_2} className="cardImg_1_1"/>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_2">Affordable Package</h2></Card.Title>
                            <Card.Text style={{'margin-top': '60px', 'margin-left': '10px', 'color': '#14396d'}}>
                            Vestibulum commodo<br/>
                             sapien non elit  porttitor,<br/>
                              vitae volutpat nibh.                   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_1">
                        <Card.Img variant="top" src={icon_3} className="cardImg_1_1"/>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_2">100% Satisfication</h2></Card.Title>
                            <Card.Text style={{'margin-top': '60px', 'margin-left': '10px', 'color': '#14396d'}}>
                            Vestibulum commodo<br/>
                             sapien non elit  porttitor,<br/>
                              vitae volutpat nibh.                   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_1">
                        <Card.Img variant="top" src={icon_4} className="cardImg_1_1" style={{'height': '35px','width': '25px'}}/>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_2">24/7 OT Support</h2></Card.Title>
                            <Card.Text style={{'margin-top': '60px', 'margin-left': '10px', 'color': '#14396d'}}>
                            Vestibulum commodo<br/>
                             sapien non elit  porttitor,<br/>
                              vitae volutpat nibh.                   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            <h6 style={{'margin-top': '150px'}}>Proces</h6>
            <h2 style={{'margin-top': '20px','left': '450px'}}>How it Work</h2>
            <table className="table_1_2">
                <tr>
                    <td>
                        <img src={icon_1_1} className="img_1_4"/>
                        <h6 className="h6_1_2">Account & Check In</h6>
                        <p className="p_1_5">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={icon_1_2} className="img_1_4"/>
                        <h6 className="h6_1_2">Choose Category</h6>
                        <p className="p_1_5">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={icon_1_3} className="img_1_4"/>
                        <h6 className="h6_1_2">Get Clean Property</h6>
                        <p className="p_1_5">Nunc scelerisque tincidunt elit. Vestibulum ipsum. <br/>
                        Cras pretium suscipit tellus sit amet aliquet</p>
                    </td>
                </tr>
            </table>
            <div className="table_1_2_1">
            <img src={img} className="img_1_5"/>
            <img src={Homepage_02_3} className="img_1_6"/>
            <h6 className="h6_1_3">Ensure Quality of<br/>Work</h6>
            <p className="p_1_5" style={{'margin-left': '900px','margin-top': '-240px'}}>
            Nunc scelerisque tincidunt elit.<br/>
            Vestibulum ipsum. Cras pretium<br/> 
            suscipit tellus sit amet.
            </p>
            <button href="" variant="primary" className="button_1_3"> Learn More </button>
            </div>
        </Container>
        <Container>
            <img src={About_1} className="img_1_7"/>
            <img src={icon_5} className="img_1_8"/>
            <h6 style={{'margin-top': '100px','margin-left': '530px'}}>Fun Fact</h6>
            <h3 className="h2_1_4">Our Successful Number</h3>
            <Row>
                <Col>
                    <Card className="card_1_2" style={{'background': '#14396d'}}>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_6">50+</h2></Card.Title>
                            <Card.Text style={{'margin-top': '80px', 'margin-left': '45px', 'color': '#00baec'}}>
                            Employer                    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_2" style={{'background': '#ffffff'}}>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_7">500+</h2></Card.Title>
                            <Card.Text style={{'margin-top': '80px', 'margin-left': '40x', 'color': '#14396d'}}>
                            Project Done                 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_2" style={{'background': '#14396d'}}>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_5">300+</h2></Card.Title>
                            <Card.Text style={{'margin-top': '80px', 'margin-left': '30px', 'color': '#00baec'}}>
                            Happy Client                  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_1_2" style={{'background': '#14396d'}}>
                        <Card.Body>
                            <Card.Title><h2 className="h2_1_6">65+</h2></Card.Title>
                            <Card.Text style={{'margin-top': '80px', 'margin-left': '30px', 'color': '#00baec'}}>
                            Win Aaward                   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container >
            <div className="con_1_3">
            <img src={icon_5} className="img_1_9"/>
            <h6 style={{'margin-left': '500px','margin-top': '-130px'}}>Testimonials</h6><br/>
            <h2 style={{'margin-top': '0px','margin-left': '380px'}}>Our Some Customer</h2>
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
            </div>
        </Container>
    </>
)