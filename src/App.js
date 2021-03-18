import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Page from './comp/Page';
import Footer from "../src/Footer/Footer"
import Courses from "./Courses/Courses"
import Teach from "./Teach/Teach"
import Contact from "./Contact/Contact"
import DigitalMarketing from './Courses/DigitalMarketing/DigitalMarketing';
import UserDetails from './Courses/ProfileDetails/UserDetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/teach-on-inskills" component={Teach} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/digital-marketing" component={DigitalMarketing} />
        <Route exact path="/profile-details" component={UserDetails} />

      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
