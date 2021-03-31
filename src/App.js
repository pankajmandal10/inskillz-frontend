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
import Curx from './Courses/Curx/Curx';
import BestPlan from "./Tutor/BestPlan"
import EditCourseDetails from './Tutor/EditCourseDetails';
import AddNewCourse from './Tutor/AddNewCourse';
import Instructor from './Tutor/Instructor';

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
        <Route exact path="/curx" component={Curx} />
        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/best-plan" component={BestPlan} />
        <Route exact path="/edit-course-Details" component={EditCourseDetails} />
        <Route exact path="/add-new-course" component={AddNewCourse} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
