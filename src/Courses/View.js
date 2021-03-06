import React from 'react'
import Searchbox from '../Component/Header/Searchbox'
import "./View.css";
import { IconButton } from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Input, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: '0px 10px 10px 0px',
        position: 'relative',
        border: '1px solid #ced4da',
        fontSize: 15,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.

        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
export default function View() {
    const [value, setValue] = React.useState('new');
    const [search, setSearch] = React.useState('By Name');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    return (
        <div className="viewSearch">
            <p className="view-1"> View Our Courses</p>
            <form className="d-flex container">
                <form class="uk-search uk-search-default ">
                    <span uk-search-icon="true"></span>
                    <input class="uk-search-input" type="search" placeholder="Search" />
                </form>

                {/* <input className="search-name " type="search" placeholder="Search" aria-label="Search" /> */}
                {/* <button className="searchBtn" type="submit">By Name</button> */}
                <FormControl >
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={search}
                        onChange={handleSearch}
                        input={<BootstrapInput />}
                    >
                        <option selected value={10}>By Name</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
                <div className="uk-visible@s">
                    <FormControlLabel
                        control={<Checkbox icon={<i className="fas fa-check-circle"></i>} checkedIcon={<i className="far fa-circle"></i>} name="checkedH" />}
                        label="Show only New courses"
                    />
                </div>
            </form>
            <div className="uk-hidden@s mobileRadio">
            <FormControlLabel
                        control={<Checkbox icon={<i className="fas fa-check-circle"></i>} checkedIcon={<i className="far fa-circle"></i>} name="checkedH" />}
                        label="Show only New courses"
                    />            </div>

        </div>
    )
}
