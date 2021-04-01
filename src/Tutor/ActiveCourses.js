// import React from 'react'
// // import "../Courses/ProfileDetails/ProfileDetails.css"
// import { Link } from "react-router-dom"

// export default function ActiveCourses(props) {
//     return (
//         // <div>
//         //    <div className="card mb-3 shadaw" style={{border: "none"}}>
//         //      <div className="row g-0">
//         //        <div className="col-md-4">
//         //          <div className="fullHeight">
//         //            <img className="image-card" src="https://www.michaelpage.co.uk/sites/michaelpage.co.uk/files/How%20to%20create%20and%20maintain%20a%20good%20company%20culture-Blog%20article-MP.jpg"></img>
//         //            {/* <img className="image-card" src={props.img} alt="..." /> */}
//         //          </div>
//         //        </div>
//         //       <div className="col-md-8" >
//         //       <div className="start-date">Start Date : {props.startDate}</div>
//         //         <div className="card-body" style={{paddingLeft: "20px"}}>
//         //           <p className="card-title-name">{props.name}</p>
//         //           <p className="instructor-names">Instructor Name : {props.instructor}</p>
//         //             <p className="progressTxt">Progress</p>
//         //             <div className="uk-flex">
//         //             <div className="progress"  style={{height: "7px",width:"190px"}}>
//         //             <div className="progress-bar " role="progressbar" style={{width: "50%",fontSize: "8px",backgroundColor:"#35C635"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
//         //           </div>
//         //           <p className="progress-percentage">50%</p>
//         //           <p className="view-status">View Status</p>
//         //           </div>
//         //           <p className="progressTxt">Chapter 02</p>
//         //           <p className="chapterTag">The Crux of Social media</p>
//         //           <span><Link to="/curx"><button className="continue-button" type="submit">Continue</button></Link></span>
//         //         </div>
//         //        </div>
//         //       </div>
//         //    </div>
//         // </div>
//         <div>
//             hello
//         </div>
//     )
// }

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
    border:1,

  },
// //   indicator: {
// //     backgroundColor: '#1890ff',
// //   },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#ffffff',
      fontWeight: theme.typography.fontWeightMedium,
      background: "#D3262A 0% 0% no-repeat padding-box",
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '500',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Offline Courses" />
          <AntTab label="Live Courses" />
        </AntTabs>
        {/* <Typography className={classes.padding} /> */}
      </div>
      
    </div>
  );
}


