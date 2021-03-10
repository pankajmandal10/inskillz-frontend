import React, { Component } from 'react'
import "./Categories.css"
import DigitalPhotography from "./DigitalPhotography";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default class categories extends Component {
    render() {
        return (
            <div className="categorySec">
                <div className='container d-flex mb-5'>
                    <h3 className="categoryHead">Categories</h3>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link color="inherit" href="/" >
                            Material-UI
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/" >
                            Core
                        </Link>
                        <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs>
                </div>

                <div className="container  uk-grid">
                    <div className="uk-width-1-4 catSwitcher">
                        <div >
                            <div class="uk-width-auto">
                                <ul class="uk-tab-left" uk-tab="connect: #my-id">
                                    <li>
                                    <a style={{padding:"0px"}}>
                                        <ul uk-accordion="true">
                                            
                                        <li>
                                            <a class="uk-accordion-title" href="#">ALL</a>
                                            <div class="uk-accordion-content">
                                            <a style={{ justifyContent: 'space-between', display: 'flex' }}>Photography  <span className="numb" >23</span></a>
                                            <a style={{ justifyContent: 'space-between', display: 'flex' }}>Photography  <span className="numb" >23</span></a> </div>
                                        </li></ul>
                                        </a>
                                        </li>
                                        {/* <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>All  <span className="numb" >1234</span></a></li> */}
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Photography  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Illustration  <span className="numb" >33</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Graphic-Design  <span className="numb" >12</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>UI UX Design  <span className="numb" >15</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Motion Graphics  <span className="numb" >12</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Web Development  <span className="numb" >45</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >06</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Graphic Design  <span className="numb" >32</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>UI UX Design  <span className="numb" >45</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Motion Graphics  <span className="numb" >34</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Web Development  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Web Development  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Web Development  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                            <li><a style={{ justifyContent: 'space-between', display: 'flex' }}>Product Design  <span className="numb" >23</span></a></li>
                        </ul>
                    </div>

                            </div>


                       <hr></hr>
                        </div>

                        <div className="uk-width-3-4" >
                            <div class="uk-width-expand">
                                <ul id="my-id" class="uk-switcher">
                                    <BrowserRouter>
                                        <Switch>
                                            <Route path="/" component={DigitalPhotography} />

                                        </Switch>
                                    </BrowserRouter>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}
