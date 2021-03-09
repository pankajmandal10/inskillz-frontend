import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import Image7 from "../image/Image7.png";
import Image8 from "../image/Image8.png";
import Map from "./FooterImg/map.png"
import fb from "./FooterImg/facebook.svg";
import inst from "./FooterImg/instagram.svg"
import linkedin from "./FooterImg/linkedin.svg"
import youtube from "./FooterImg/youtube.svg"


export default function Footer() {
    return (
            <footer className="footer-area footer--light">
  <div className="footer-big" style={{textAlign: "left"}}>
    {/*  start .container  */}
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3">
          <div className="footer-widget">
            <div className="widget-about">
            <h4 className="footer-widget-title" style={{color:"#143754",font:"normal normal bold 25px/29px Roboto"}}> Download The App Now </h4>
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
              <h4 className="footer-widget-title" style={{color:"#143754",font:"normal normal bold 25px/29px Roboto"}}> General </h4>
              <ul className="text-info" >
                <li >
                  <a to="#" style={{color:"#143754"}}>SignUp</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>About Us</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Tech On Inskillz</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Contact Us</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Careers</a>
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
              <h4 className="footer-widget-title" style={{color:"#143754",font:"normal normal bold 25px/29px Roboto"}}>Community</h4>
              <ul>
                <li>
                  <a to="#" style={{color:"#143754"}}>Create Account</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Join Premium</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Refer A friend</a>
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
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title" style={{color:"#143754",font:"normal normal bold 25px/29px Roboto"}}>Support</h4>
              <ul>
                <li>
                  <a to="#" style={{color:"#143754"}}>FAQ's</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Terms & Conditions</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Privacy Policy</a>
                </li>
                <li>
                  <a to="#" style={{color:"#143754"}}>Get Help</a>
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
              <h4 className="footer-widget-title" style={{color:"#143754",font:"normal normal bold 25px/29px Roboto"}}>Contact Us</h4>
              <ul>
                <li >
                  <a to="#" >
                    <p style={{color:"#143754",font: "normal normal normal 15px/24px Roboto"}}>FutureLabs Interactive Pvt. Ltd <br/> No 6/858-M 2nd Floor Valamkottil Towers, Judgemukku, Kakkanad, kochi</p>
                  </a>
                </li>
                <li>
                  <img style={{width: "261px",height: "151px"}} src={Map} />
                </li>
                
                <li style={{fontSize:"100px", marginTop:"-42px"}}>
                <img style={{marginLeft: "0px"}} src={fb} />
                <img style={{marginLeft: "32px"}} src={inst} />
                <img style={{marginLeft: "32px"}} src={linkedin} />
                <img style={{marginLeft: "32px"}} src={youtube} />
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