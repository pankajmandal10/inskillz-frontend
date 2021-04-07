import React from 'react'
import "../../Courses/ProfileDetails/ProfileDetails.css"
import { Link } from 'react-router-dom'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import OfflineCourses from './OfflineCourses';
import LiveCourses from './LiveCourses';
import Button from '@material-ui/core/Button';

import img1 from "../../Courses/ProfileDetails/Img/img1.png"

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
    
  },
  indicator: {
    backgroundColor: '#D3262A',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: "31vw",
    border: "1px solid #D3262A",
    fontWeight: theme.typography.fontWeightRegular,
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
      color: '#fff',
      opacity: 1,
    },
    '&$selected': {
      background:"#D3262A",
      color: "fff !important"
    },
    '&:focus': {
      color: '#fff',
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
        <div className="activeCourses" >
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Offline Courses" {...a11yProps(0)} />
            <AntTab label="Live Courses" {...a11yProps(0)} style={{borderRadius: "0px 6px 6px 0px"}}/>
          </AntTabs>
        </div>
        <TabPanel value={value} index={0}>
          <div>
            <p className="Active-Course">Active Course (3) 
             <span style={{float: "right"}}>
              <Link to="/add-new-course">
              <button className="addNewCourses">
                + Add New Courses
              </button>
              </Link>
             </span>
            </p>
            
          </div>
          <div className="progress-card">
            <OfflineCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
          <div className="progress-card">
            <OfflineCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
          <div className="progress-card">
            <OfflineCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div>
            <p className="Active-Live-Course">Active Live Course (3) 
             <span className="scheduleLive">
              <button className="scheduleLiveCourses">
                + Schedule Live Courses
              </button>
             </span>
            </p>
            
          </div>
          <div className="progress-card">
            <LiveCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
          <div className="progress-card">
            <LiveCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
          <div className="progress-card">
            <LiveCourses img={img1} startDate="12th February 2021" name="Why Digital Marketing ?" instructor="Joseph Smith" coursesLanguage="English" />
          </div>
        </TabPanel>
      
      </div>
    </div>
  )
}


