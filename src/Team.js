import React from 'react';
import './Team.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import img from "./images/img.jpg";
import Homepage_03_1 from "./images/Homepage_03_1.png";


export const Team = () => (
    <>
        <div className="con_3_1">
            <h1 className="h1_3_1">Marry Ann Ford</h1>
            <button className="button_3_1">Home → Marry Ann Ford</button>
        </div>
        <Container>
            <Row>
                <Col md={7}>
                    <img className="img_3_1"
                    src={Homepage_03_1}
                    alt="img"
                    />
                    <img src={img} className="img_3_2"/>
                </Col>
                <Col md={5}>
                    <div className="col_3_1">
                        <p className="p_3_1">Founder & Professional Cleaner</p>
                        <h3 className="h3_3_1">Mary Ann Ford</h3>
                        <p className="p_3_2">
                        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium 
                        suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non
                        porttitor. Pellentesque vehicula est a lorem.</p>
                        <p className="p_3_3"><a href="">twitter</a></p>
                        <div className="p_3_4">
                            <p className=""><b>Phone</b> : 027-786-2360</p>
                            <p><b>Address</b> : 1563  Terry Lane, Longwood, Florida, USA</p>
                            <p><b>Email</b> : 1563  Terry Lane, Longwood, Florida, USA</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
)        