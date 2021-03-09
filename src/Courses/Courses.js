import { Category } from '@material-ui/icons'
import React from 'react'
import Offered from "./Offered"
import View from "./View";
import Categories from "./Categories"
import Discuss from "../comp/Discuss"


export default function Courses() {
    return (
        <div>
            <Offered />
            <View />
            <Categories />
            <Discuss />
           
        </div>
    )
}
