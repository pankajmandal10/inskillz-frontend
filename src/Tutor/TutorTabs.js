import React from 'react'
import "../Courses/ProfileDetails/ProfileDetails.css"

// import ProgressCard from '../Courses/ProfileDetails/ProgressCard'
import img1 from "../Courses/ProfileDetails/Img/img1.png";
import img2 from "../Courses/ProfileDetails/Img/img2.png";
import img3 from "../Courses/ProfileDetails/Img/img3.png";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import Discussions from '../Courses/ProfileDetails/Discussions';
import Instructors from "../Courses/ProfileDetails/Instructors"
import Profile from "../Courses/Image/profile.png"
import Payment from "../Courses/ProfileDetails/Payment"
import ActiveCourses from './ActiveCourses';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
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
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
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
      maxWidth: '55vw',
      width: '100%',
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
  }
}));

export default function TutorTabs() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <div className="profileTabgrp">
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Active Courses" {...a11yProps(0)} />
            <AntTab label="Discussions" {...a11yProps(0)} />
            <AntTab label="Instructors" {...a11yProps(0)} />
            <AntTab label="Payments" {...a11yProps(0)} />
          </AntTabs>
        </div>
        <TabPanel value={value} index={0}>

          {/* <div className="progress-card">
            <ActiveCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" />
          </div>
          <div className="progress-card">
            <ActiveCourses img={img2} startDate="12th February 2021" name="IELTS" instructor="Joseph Smith" />
          </div>
          <div className="progress-card">
            <ActiveCourses img={img3} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" />
          </div> */}
          <ActiveCourses />

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Discussions
            ProfileImg={Profile}
            studentName="Rajeev menon"
            studentChat="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
            ProfileImg1={Profile}
            studentName1="Swaroop Chandra"
            studentChat1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            like="23"
            dislike="23"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
         <div className="uk-child-width-1-3@s uk-grid">
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
           <div>
           <Instructors pic={Profile} name="Stephen Segmeister" instructor="Digital marketing Expert" />
           </div>
          
         </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Payment />
        </TabPanel>
      </div>
    </div>
  )
}