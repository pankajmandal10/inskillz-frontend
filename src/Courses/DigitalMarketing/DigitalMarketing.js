import React, { Component } from 'react'
import Header from "./Header"
import Headline from './Headline'
import ProfileCard from './ProfileCard';
import Discuss from "../../comp/queries"

export default class DigitalMarketing extends Component {
    componentDidMount =()=>{
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div>
                <Header />
             
                <Headline />
                <Discuss head="Any Queries on Digital Marketing?"/>
            </div>
        )
    }
}