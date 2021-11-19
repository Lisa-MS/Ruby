import React from 'react';
import './Footer.css'; 

class Footer extends React.Component {
    render() {
      return <footer>
          <div className="grid-container">
            <div className="footer-row top">
            <div className="footer-column">
                <img id="footer-logo" src=""/>
                <span>Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna.</span>
                <div className="email-form">
                    <input id="newsletter-email" type="text" placeholder="Enter Email"></input>
                    <button type="submit" id="newsletter-button"></button>
                    </div> 
            </div>
            <div className="footer-column">
                <h3>Services</h3>
                <a href="/">Deep Cleaning</a>
                <a href="/">Housekeeping</a>
                <a href="/">Window Cleaning</a>
                <a href="/">Cloth Washing</a>
                <a href="/">Regular Cleaning</a>
            </div>
            <div className="footer-column">
                <h3>Links</h3>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Services</a>
                <a href="/">Terms of Use</a> 
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <span><b>455-362-3603</b></span>
                <span><b>sayhello@zigzg.com</b></span>
                <span>142  Fannie Street, Houston, Texas, USA</span> 
            </div>
            </div> 
             
            <div className="footer-row bottom">
                <div className="copyright">
                    <span>&copy;  2020 Zigzag all rights reserved.</span>
                <span>Privacy   |   Policy</span></div>
            </div>
       
        </div>
      </footer>;
    }
  }

  export default Footer;
