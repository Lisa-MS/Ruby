import React from 'react';
import './Blog.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import img from "./images/img.jpg";


export const Blog = () => (
    <>
        <div className="con_6_1">
            <h1 className="h1_6_1">Blog Details</h1>
            <button className="button_6_1">Home → Blog Standard</button>
        </div>
        <Container className="coantainer_6_1">
            <img className="img_6_1" src={img} alt="img"/>
            <h5 className="h5_6_1">Free Virtual Conference To Take Your Agile UX<br/>Skills To The Next Level</h5>
            <p className="p_6_1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/>
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto<br/>
            beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <hr className="hr_6_1"/>
            <p className="p_6_2">Avoids pleasure itself, because it is pleasure, but because those<br/> 
            who do not know how to pursue pleasure rationally encounter con<br/>    
            sequences that are extremely painful again anyone<br/>
            <b style={{'color':'#00baec'}}>Tony R. Francois</b></p>
            <p className="p_6_3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/>
                 commodo consquat. Duis aute irure dolor reprehendermust explain to you how all this mistaken<br/>
                  idea of denouncing pleasure and praising pain was born and I will give you a complete account<br/>
                   of the system, and expound the actual teaings of the great explorere<br/><br/>
            <b>Popular Tag</b> : Agriculture, Organic, Food</p>
            <Row style={{'width': '700px'}}>
                <Col className="col_6_1">
                <p>Building Pub Sub Service<br/>Using Node And Redis</p>
                </Col>
                <Col className="col_6_2">
                <p>Once Upon Time Use Story <br/>For Better Engagement</p>
                </Col>
            </Row>
            <div className="div_6_1">
            <div className="circle_6_1"></div>
                <h5 className="h5_6_2">Frederick C. Mosier</h5>
                <p className="p_6_4">Sed ut perspiciatis unde omnis iste natus error voluptatem<br/>
                     accutium dolorem que laudantium, totam rem aperiam, eaque<br/>
                      ipsa quae abilloes inventore veritatis quasi architect.</p>
            </div>
            <div>
                <h3 className="h3_6_1">Client’s Comments</h3>
                <hr className="hr_6_2"/>
            </div>
            <div >
                <img src={img} alt="img" class="circle_6_2"/>
                <p className="p_6_5"><b>John F. Medina</b>&emsp;  25 July 2020 <br/>But I must explain to you how all this mistaken idea of denouncing<br/> pleasure and praising pain was born and I will give you.<br/><small>Reply Commets</small></p>
                </div>
            <div >
                <img src={img} alt="img" class="circle_6_3"/>
                <p className="p_6_6"><b>Jeffrey T. Kelly</b>&emsp;  25 July 2020 <br/> Again is there anyone who loves or pursues or desires to obtain<br/> pain of itsbecause it is pain, but because occasionally.<br/><small>Reply Commets</small></p>
            </div>
            <div >
                <img src={img} alt="img" class="circle_6_4"/>
                <p className="p_6_7"><b>Richard B. Zellmer</b>&emsp;25 July 2020<br/>Harum quidem rerum facilis est et expedita distinctio. Nam libero<br/> tempore, cum soluta nobis est eligendi optio cumque.<br/><small>Reply Commets</small></p>
            </div>
            </Container>
            <Container>
            <div>
                <h3 className="h3_6_2">Send A Message</h3>
                <hr className="hr_6_3"/>
                <form>
                    <input type="text" id="defaultFormLoginTextEx" className="form-control"  value=" Your Full Name" style={{'margin-top': '80px','width':'300px','margin-left':'67px'}}/>
                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" value="Your email" style={{'width':'300px','margin-top': '-38px','margin-left':'390px'}}/><br/>
                    <input type="textarea" id="defaultFormLoginTextEx"  value="Write Message"  className="textarea_6_1"/><br/>
                <div>
                    <Button className="button_6_6" type="submit">Send Comments</Button>
                </div>
                </form>
            </div>
            </Container>
            <Container className="brd_6_1">
                <hr className="hr_6_4" />
                <h5 className="h5_6_3">Category</h5>
                <hr className="hr_6_5" />
                <p><small>Deep Cleaning</small></p>
                <p><small>Housekeeping</small></p>
                <p><small>Window Cleaning</small></p>
                <p><small>Cloth Washing</small></p>
                <p><small>Regular Cleaning</small></p>
                <p><small>Dish Wash</small></p>
            </Container>
            <Container className="brd_6_2">
                <hr className="hr_6_4" />
                <h5 className="h5_6_3">Recent News</h5>
                <hr className="hr_6_5" />
                <div><img src={img} alt="img" class="img_6_2" style={{'margin-bottom':'10px'}}/>
                    <p className="p_6_8"><b>Free Virtu Confe<br/> Rences Take Your Agile<br/> UX Skills</b><br/><small>22 April 2020</small></p>
                </div>
                <div><img src={img} alt="img" class="img_6_2" style={{'margin-bottom':'10px'}}/>
                    <p className="p_6_8"><b>Basic Patterns For<br/>Mobile Navigation<br/>Pros And Cons</b><br/><small>22 April 2020</small></p>
                </div>
                <div><img src={img} alt="img" class="img_6_2" style={{'margin-bottom':'10px'}}/>
                    <p className="p_6_8"><b>Free Virtu Confe<br/> Rences Take Your Agile<br/> UX Skills</b><br/><small>22 April 2020</small></p>
                </div>
            </Container>
            <Container className="brd_6_3">
                <hr className="hr_6_4" />
                <h5 className="h5_6_3">Popular Tags</h5>
                <hr className="hr_6_5" />
                <div>
                    <button href="" variant="primary" className="button_6_2" style={{'margin-left':'-475px', 'width': '70px'}}>Cleaning</button>
                    <button href="" variant="primary" className="button_6_2" style={{'margin-left':'10px', 'width': '60px'}}>Hause</button>
                    <button href="" variant="primary" className="button_6_2" style={{'margin-left':'10px', 'width': '60px'}}>Office</button>
                </div>
                <div>
                    <button href="" variant="primary" className="button_6_3" style={{'margin-left':'-475px', 'width': '70px'}}>Kitchen</button>
                    <button href="" variant="primary" className="button_6_3" style={{'margin-left':'10px', 'width': '55px'}}>Works</button>
                    <button href="" variant="primary" className="button_6_3" style={{'margin-left':'10px', 'width': '65px'}}>Services</button>
                </div>
                <div>
                    <button href="" variant="primary" className="button_6_4" style={{'margin-left':'-475px', 'width': '50px'}}>P8D</button>
                    <button href="" variant="primary" className="button_6_4" style={{'margin-left':'10px', 'width': '85px'}}>Wordpress</button>
                    <button href="" variant="primary" className="button_6_4" style={{'margin-left':'10px', 'width': '60px'}}>HTML</button>
                </div>
            </Container>
            <Container className="brd_6_4">
                <button href="" variant="primary" className="button_6_5">New Detergent</button>
                <img className="img_6_3" src={img} />
        </Container> 
    </>
)        