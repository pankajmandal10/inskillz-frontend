import React from 'react'
import Searchbox from '../Header/Searchbox'
import "./View.css";
import {IconButton} from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Input, TextField } from '@material-ui/core';

export default function View() {
    return (
        <div>
            <p className="view-1"> View Our Courses</p>
            <form className="d-flex">
                <input className="search-name" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit"><span className="btn-1">By Name</span></button>
                 <input className="radio"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                 <label className="radio-text" for="flexRadioDefault1">
                   Show only New courses
                 </label>
           </form>
           <p className="categories">Categories</p>
           <p className="photography">Photography</p>
           <p className="digital">Digital Photography (11) </p>
           <hr />
        </div>
    )
}
