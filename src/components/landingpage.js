import React, { Component } from 'react';
import {MDBFooter,MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";
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