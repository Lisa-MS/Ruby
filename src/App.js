import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {About} from './About';
import {Services} from './Services';
import {Pages} from './Pages';
import {Blog} from './Blog';
import {Contact} from './Contact';
import {Team} from './Team';
import {Project} from './Project';
import {Faqs} from './Faqs';

function App() {
  return (
   <>
   <Router>
      <NaviBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pages" component={Pages} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
          <Route path="/project" component={Project} />
          <Route path="/faqs" component={Faqs} />
        
      </Switch>
      <Footer/> 
      </Router>
      
   </>
  );
}


export default App;

