import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import Image7 from "../Component/Assets/image/Image7.png";
import Image8 from "../Component/Assets/image/Image8.png";
import Map from "./FooterImg/map.png"
import fb from "./FooterImg/facebook.svg";
import inst from "./FooterImg/instagram.svg"
import linkedin from "./FooterImg/linkedin.svg"
import youtube from "./FooterImg/youtube.svg"


export default function Footer() {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big" style={{ textAlign: "left" }}>
        {/*  start .container  */}
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <div className="footer-widget">
                <div className="widget-about">
                 {/* <Link to="best-plan">
                  <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}> Download The App Now </h4>
                 </Link> */}
                 <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}> Download The App Now </h4>

                  <ul className="text-info" >
                    <li>
                      <img src={Image7} />
                    </li>
                    <li>
                      <img src={Image8} />
                    </li>
                  </ul>
                </div>
              </div>
              {/*  Ends: .footer-widget  */}
            </div>
            {/*  end /.col-md-4  */}
            <div className="col-md-2 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}> General </h4>
                  <ul className="text-info" >
                    <li >
                      <a to="#" style={{ color: "#143754" }}>Sign Up</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>About Us</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Teach On Inskillz</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Contact Us</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Careers</a>
                    </li>
                  </ul>
                </div>
                {/*  end /.footer-menu  */}
              </div>
              {/*  Ends: .footer-widget  */}
            </div>
            {/*  end /.col-md-3  */}



            <div className="col-md-2 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}>Community</h4>
                  <ul>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Create Account</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Join Premium</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Refer A friend</a>
                    </li>
                  </ul>
                </div>
                {/*  end /.footer-menu  */}
              </div>
              {/*  Ends: .footer-widget  */}
            </div>
            {/*  end /.col-lg-3  */}

            <div className="col-md-2 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu ">
                  <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}>Support</h4>
                  <ul>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>FAQ's</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Terms & Conditions</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Privacy Policy</a>
                    </li>
                    <li>
                      <a to="#" style={{ color: "#143754" }}>Get Help</a>
                    </li>
                  </ul>
                </div>




                {/*  end /.footer-menu  */}
              </div>
              {/*  Ends: .footer-widget  */}
            </div>
            {/*  Ends: .col-lg-3  */}

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title" style={{ color: "#143754", font: "normal normal bold 25px/29px Roboto" }}>Contact Us</h4>
                  <ul>
                    <li >
                      <a to="#" >
                        <p style={{ color: "#143754", font: "normal normal normal 15px/24px Roboto" }}>FutureLabs Interactive Pvt. Ltd <br /> No 6/858-M , 2nd Floor ,<br></br> Valamkottil Towers, Judgemukku,<br></br> Kakkanad, Kochi ,Kerala. <br></br><br></br>Phone <i  className="fas fa-phone uk-margin-left"></i> : +91-484-2388023 <br></br>
                          Support <i className="fas fa-question-circle uk-margin-small-left"></i> :	+91-9037310060</p>
                      </a>
                    </li>
                    <li>
                      <img style={{ width: "261px", height: "151px" }} src={Map} />
                    </li>

                    <li style={{ fontSize: "100px", marginTop: "-52px" }}>
                      <a href="https://www.facebook.com/inskillz/" target="_blank"><img style={{ marginLeft: "0px" }} src={fb} /></a>
                      <a href="https://www.instagram.com/inskillz/" target="_blank"><img style={{ marginLeft: "30px" }} src={inst} /></a>
                      <a href="www.linkedin.com/in/inskillz" target="_blank"><img style={{ marginLeft: "30px" }} src={linkedin} /></a>
                      <a href="https://www.youtube.com/channel/UC4Yj5pz_tbTwIL6NJLD7kqg" target="_blank"><img style={{ marginLeft: "30px" }} src={youtube} /></a>
                    </li>
                  </ul>
                </div>
                {/*  end /.footer-menu  */}
              </div>
              {/*  Ends: .footer-widget  */}
            </div>

          </div>
          {/*  end /.row  */}
        </div>
        {/*  end /.container  */}
      </div>
      {/*  end /.footer-big  */}


    </footer>
  )
}