import React from 'react';
import './Project.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import img from "./images/img.jpg";
import img_1 from "./images/img_1.jpg";

export const Project = () => (
    <>
        <div className="con_4_1">
            <h1 className="h1_4_1">Project Details</h1>
            <button className="button_4_1">Home → Project Details</button>
        </div>
        <Container>
            <div className="coantainer_4_1">
            <img className="img_4_1" src={img} alt="img"/>
            <h3 className="h3_4_1">Office Cleaning</h3>
            <p style={{'margin-top': '-20px','left': '80px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/>
             laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto<br/>
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut<br/>
               fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
             <div class="circle_4_1"></div>
            <p style={{'margin-top': '110px','left': '130px'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis<br/>
                  praesentium luptatum deleniti atque corrupti quos dolores.</p>
            <div class="circle_4_2"></div>
            <p style={{'margin-top': '110px','left': '130px'}}>Facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est<br/>
             eligendi optio cumque nihil impedit quo minus id quod maxime</p>
            <div class="circle_4_3"></div>
            <p style={{'margin-top': '-38px','left': '130px'}}>Sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur<br/>
             aut prefer endis doloribus asperiores repellat.</p>
            <table>
                <tr>
                    <td>
                    <img className="img_4_2" src={img} alt="img"/>
                    </td>
                    <td>
                    <img className="img_4_2" src={img} alt="img"/>
                    </td>
                </tr> 
            </table>
            <h3 className="h3_4_2">How Does We Works</h3>
            <p style={{'margin-top': '-20px','left': '80px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore<br/>
             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea modo<br/>
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br/>
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius<br/><br/>
              Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis<br/>
               nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi<br/>
               consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
               </div>
        </Container> 
        <Container>
            <div className="brd_4_1">
            <hr className="hr_2" />
            <h5 className="h5_4_1">Project Info</h5>
            <hr className="hr_1" />
            <p>Clients Name : <b>Shawn S. Voss</b></p>
            <p>Project Date : <b>20 Apr 2020</b></p>
            <p>Category : <b>Office Cleaning</b></p>
            <p>Location : <b>205 Street, USA</b></p>
            <p>Website : <b>www.cleaning.com</b></p>
            </div>
        </Container>  
        
        <Container>
            <div className="brd_4_2">
            <hr className="hr_2" />
            <h5 className="h5_4_2">Christian Dayton</h5>
            <hr className="hr_1" />
            <form>
                <input type="text" id="defaultFormLoginTextEx" className="form-control"  value="Enter Your Name" style={{'border': 'none','width':'250px'}}/><br/>
                <input type="email" id="defaultFormLoginEmailEx" className="form-control" value="Your email" style={{'border': 'none','width':'250px'}}/><br/>
                <input type="text" id="defaultFormLoginTextEx" className="form-control"  value="Phone" style={{'border': 'none','width':'250px'}}/><br/>
                <input type="textarea" id="defaultFormLoginTextEx" className="form-control"  value="Write Message"  className="textarea_4_1"/><br/>
                <div>
                    <button className="button_4_2" type="submit">Submit Requaest</button>
                </div>
            </form>
            </div>
        </Container>  
        <Container className="brd_4_3">
            <button href="" variant="primary" className="button_4_3">New Detergent</button>
            <img className="img_4_3" src={img} />
        </Container>   
        <Container>
            <p className="p_4_6">Portfolio</p><br/>
            <h3 className="h3_4_3">Project We Have Done Since</h3>
            <h3 className="h3_4_4">Recent Month</h3>
            <Row>
                <Col className="col_4_1">
                    <Card className="card_4_1" style={{'margin-top': '50px','margin-left': '60px'}}> 
                        <Card.Img variant="top" src={img_1} className="cardImg_4_1"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Taherul Incubation</Card.Title>
                            <Card.Text className="cardText_1">
                            Deep Cleaning    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_4_1" style={{'margin-top': '50px','margin-left': '-20px'}}>
                        <Card.Img variant="top" src={img_1} className="cardImg_4_1"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Miazan Eco Lodge</Card.Title>
                            <Card.Text className="cardText_1">
                            Housekeeping
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_4_1" style={{'margin-top': '50px','margin-left': '-100px'}}>
                        <Card.Img variant="top" src={img_1} className="cardImg_4_1"/>
                        <Card.Body>
                            <Card.Title className="cardTitle_1">Hasib Institution</Card.Title>
                            <Card.Text className="cardText_1">
                            Office Cleaning
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 
    </>
)