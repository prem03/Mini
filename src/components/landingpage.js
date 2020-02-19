import React, { Component } from 'react';
import {MDBFooter,MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";



class LandingPage extends Component{
    render(){
        return(
            <div>
                <div><MDBContainer  className="w-auto p-3" >
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.gettyimages.com/photos/cricket-the-game-moment-picture-id642535304?s=2048x2048"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.gettyimages.com/photos/soccer-game-moment-with-goalkeeper-picture-id505988052?s=2048x2048"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.gettyimages.com/photos/field-hockey-player-in-mid-action-during-hockey-game-picture-id503545170?s=2048x2048"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer></div>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Footer Content</h5>
                  <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.SportsHub.com"> www.SportsHub.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
          </div>
        )
    }
}

export default LandingPage;