import React, { Component } from 'react';
import SportsCard from './SportsCard';
import Carousel from './Carousel';
import Footer from './footer';
//import { Carousel } from 'reactstrap';



class LandingPage extends Component{
    render(){
        return(
            <div>
              <div>
              <Carousel/>
              </div>
          
           <div>
             <SportsCard/>
           </div>
          
           <Footer/>

          </div>
        )
    }
}

export default LandingPage;