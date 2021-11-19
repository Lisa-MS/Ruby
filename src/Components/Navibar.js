import React from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import icon from "./icon.png";
import styled from "styled-components";


const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link {
    color: #14396d;
    &:hover{
        color: #14396d;
        }
    }
`


export default function NaviBar(){
    return(
        <Styles>
    <Navbar collapseOnSelect expand="lg"  variant="#FFFFFF" style={{'background-color': 'white'}}>
        <Container >
            <Nav >
                <img
                    className="d-block"
                    style={{'height': '55px'}}
                    src={icon}
                    alt="icon"
                />
            </Nav>
            <Navbar.Brand style={{'margin-left': '220px'}}></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                <Nav.Link><Link to="/pages">Pages</Link></Nav.Link>
                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
            </Nav>
            <Nav>
            <Button variant="warning" size="sm" 
            style={{ 
                'margin-left':'-500px',
                'position':'relative',
            'margin-top': '5px',
            'background-color': '#fedb41', 
            'border' : '#fedb41', 
            'height': '30px', 
            'width': '100px',
            'font-size': '9px',
            }}> Get a Quote</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </Styles>
    )}