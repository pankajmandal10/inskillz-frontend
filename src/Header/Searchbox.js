import React from 'react';
import "./Navbar.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import search from '../image/search.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "20vw",
    minWidth:'20vw',
    height: "39px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border:"none",
    borderRadius: "10px",
    textAlign:"start",
    paddingLeft:"10px"

  },
  input: {
    flex: 1,
    textAlign: "left",
    font: "italic normal 300 18px Roboto",
    letterSpacing: "0px",
    color: "#68696A",
    opacity: "1",
  },
  iconButton: {
     marginLeft: "-6px",
     marginTop:'-5px'
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Searchbox() {
  const classes = useStyles();

  return (
    <div className="homeSearch">
    <Paper component="form" className={classes.root}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
       <img src={search}></img>
        {/* <SearchIcon className="search-icon" style={{ fontSize: 28,marginLeft: "-7px", marginTop: "-5px" }} /> */}
      </IconButton>
      <InputBase
        style={{width: "auto",marginTop: "-10px"}}
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
      />      
    </Paper>
    </div>
  );
}