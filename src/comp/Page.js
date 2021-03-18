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

export default function Page() {
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
        </div>
    )
}
