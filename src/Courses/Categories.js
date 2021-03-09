import React, { Component } from 'react'
 import "./Categories.css"
import DigitalPhotography from "./DigitalPhotography";

export default class categories extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                  <a href="#all">All  <span className="numb" style={{marginLeft: "120px"}}>1234</span></a>
                  <a href="#photography">Photography <span className="numb" style={{marginLeft: "60px"}}>23</span></a>
                  <a href="#illustration">Illustration <span className="numb" style={{marginLeft: "80px"}}>33</span></a>
                  <a href="#graphic-design">Graphic-Design <span className="numb" style={{marginLeft: "40px"}}>12</span></a>
                  <a href="#design">UI UX Design <span className="numb" style={{marginLeft: "60px"}}>15</span></a>
                  <a href="#motion-graphics">Motion Graphics <span className="numb" style={{marginLeft: "30px"}}>12</span></a>
                  <a href="#web-development">Web Development <span className="numb" style={{marginLeft: "15px"}}>45</span></a>
                  <a href="#product-design">Product Design <span className="numb" style={{marginLeft: "40px"}}>06</span></a>
                  <a href="#graphic-design">Graphic Design <span className="numb" style={{marginLeft: "40px"}}>32</span></a>
                  <a href="#ui-ux-design">UI UX Design <span className="numb" style={{marginLeft: "60px"}}>45</span></a>
                  <a href="#motion-graphic">Motion Graphics <span className="numb" style={{marginLeft: "30px"}}>34</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <a href="#web-developments">Web Development <span className="numb" style={{marginLeft: "15px"}}>23</span></a>
                  <hr />
                </div>
                <div className="main">
                <DigitalPhotography />
                </div>
            </div>
        )
    }
}
