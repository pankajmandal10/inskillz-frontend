import React, { Component } from 'react'
import Header from "./Header"
import Headline from './Headline'
import ProfileCard from './ProfileCard';
import Discuss from "../../comp/Discuss"

export default class DigitalMarketing extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProfileCard />
                <Headline />
                <Discuss />
            </div>
        )
    }
}
