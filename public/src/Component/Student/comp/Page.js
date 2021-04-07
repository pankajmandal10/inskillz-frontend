import React from 'react'
import Home from "./Home";
import Learning from './Learning';
import Featured from "./Featured";
import Selling from "./Selling";
import New from "./New"
import Expand from "./Expand";

import Meet from "./Meet"
import Dream from './Dream';
import Discuss from './Discuss';
import NavLogin from "../../../Courses/DigitalMarketing/Enroll/navLogin"

export default function Page() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className="home">
            <Home />
            <Learning />
            <Featured />
            <Selling />
            <New />
            <Expand />
            <Meet />
            <Dream />
            <Discuss />
            
            <NavLogin handleClose={handleClose} open={open}></NavLogin>
            {/* <div className="d-flex">
                 <button onClick={handleClickOpen} > teacher Login / Signup</button>
            </div> */}
        </div>
    )
}
