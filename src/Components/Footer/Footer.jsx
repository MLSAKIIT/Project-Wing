import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo1 from '../../images/MSC.png'
import { SocialIcon } from 'react-social-icons';
import logo from '../../images/main_logo.png'


import '../Footer/footer.css'

export default function Footer() {
  return (

    <div className="footer" id="footer" class="bg_image">
      <h1 className="grad-text">Contact us</h1>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="3">
                <img id="comlogo" className="com-logo" src={Logo1} style={{height:'130px'}} alt="MSC Logo"/>
                <img id="comlogo" className="com-logo" src={logo} style={{height:'150px'}} alt="Project Wing Logo"/>
              </MDBCol>
              <MDBCol md="5">
                <h3 className="title">Microsoft Student Community, KIIT Chapter</h3>
                <p style={{fontFamily: 'DM Sans'}}>
                  Finding your community is more important than ever as classes
                  and social activities take place virtually.
                </p>
              </MDBCol>
              <MDBCol md="4">
                <h3 className="title">Connect with us at: </h3>
                <div style={{display: "flex", justifyContent: "space-between", width: '100%', margin: '0 auto' }}>
                <p style={{fontFamily: 'DM Sans'}}>
                  Phone: <a href="tel:+919991114099"> +91-99911-14099</a> and <a href="tel:+919007173684">+91-90071-73684</a>
                </p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", width: '90%', margin: '0 auto' }}>
                  <SocialIcon url="https://wa.me/+919007173684" network='whatsapp'/>
                  <SocialIcon url="mailto:msckiit@outlook.com"/>
                  <SocialIcon url="https://www.linkedin.com/company/msakiit" target="_blank"/>
                  <SocialIcon url="https://www.instagram.com/msckiit/" target="_blank"/>
                  <SocialIcon url="https://www.facebook.com/msakiit" target="_blank"/>
                  <SocialIcon url="https://twitter.com/msakiit?s=08" target="_blank"/>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3" id="copyright" style={{fontFamily: 'DM Sans'}}>
            <MDBContainer fluid style={{color: 'white'}}>
              <MDBRow className="mdb-col">
                <MDBCol>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://msackiit.tech/" target="__blank"> MSC KIIT </a>
              </MDBCol>
              <MDBCol>
                Made with ❤ and ☕ by MSC, KIIT Chapter.
              </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBFooter>
      
    </div>
  );
}
