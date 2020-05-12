import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small_pt-4_mt-4">
      <MDBContainer fluid className="text-center_text-md-left">
        <MDBRow>
          {/* <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
          </MDBCol> */}
          <MDBCol md="6">
            <h5 className="title">About Sports</h5>
            <Link to="/cricket">Cricket </Link><br/>
            <Link to="/football">Football </Link><br/>
            <Link to="/basketball">Basketball </Link><br/>
            <Link to="/cricket">CommonWealth </Link><br/>
            {/* <ul>
              <li className="list-unstyled">
              <Link to="/cricket">Cricket </Link>
              </li>
              <li className="list-unstyled">
              <Link to="/football">Football </Link>
              </li>
              <li className="list-unstyled">
              <Link to="/basketball">Basketball </Link>
              </li>
              <li className="list-unstyled">
              <Link to="/cricket">CommonWealth </Link>
              </li>
            </ul> */}
          </MDBCol>
          <MDBCol md="6">
          <h5 className="title">About Sports</h5>
            <Link to="/cricket">Hockey </Link><br/>
            <Link to="/football">Badminton </Link><br/>
            <Link to="/basketball">Soccer </Link><br/>
            <Link to="/cricket">Olympics </Link><br/>
          </MDBCol>
          <MDBCol md="6">
          <h5 className="title">Useful Links</h5>
            <Link to="/cricket">Live Score</Link><br/>
            <Link to="/football">Recommendation</Link><br/>
            <Link to="/basketball">News Feed</Link><br/>
            <Link to="/cricket">Player Stats</Link><br/>
          </MDBCol>
          <MDBCol md="6">
          <h5 className="title">Contact Us</h5>
            <Link to="/cricket">SportsHub , HA-HA Lane, WHIP-MA WHOP-MA Road, Bangalore, Karnataka</Link><br/>
            <Link to="/cricket">+91 6360379519, 9606408683</Link><br/>
            <Link to="/football">+91 9110168497, 9113969543</Link><br/>
            <Link to="/basketball">contactus@sportshub.mail.com</Link><br/>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.SportsHub.com">SportsHub.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;