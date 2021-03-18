import React from 'react'
import "./StudentLogin.css"


import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';



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
        <Box py={3}>
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
    backgroundColor: '#143754',
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
      color: '#143754',
      opacity: 1,
    },
    '&$selected': {
      color: '#143754',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#143754',
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
  },
  username: {
    textAlign: "left",
    font: "normal normal normal 15px/24px Roboto",
    color: "#143754"
  },
  textbox: {
    width: 200,
    height: 40,
    background: "#F4F4F4 0% 0% no-repeat padding-box",
    borderRadius: 6,
    border: "none",
  },
  google: {
    width: 200,
    height: 32,
    background: "#3583C5",
    color: "#FFFFFF"
  },
  facebook:{
    marginTop:"10px",
    width: 200,
    height: 32,
    fontSize:12,
    background: "#385898",
    paddingRight:"5px",
    color: "#FFFFFF"
  },
  enrolled: {
    marginTop: 36,
    width: 172,
    height: 33,
    textAlign: "center",
    font: "normal normal 300 12px/19px Roboto",
    color: "#143754",
  },
  signIn: {
    marginTop: 13,  
    width: 200,
    height: 35,
    background: "#3583C5 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 6,
    color:"#FFFFFF"
  }
}));


export default function StudentTab() {

    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Sign Up" {...a11yProps(0)} />
          <AntTab label="Student Login" {...a11yProps(0)}/>
        </AntTabs>
        <TabPanel value={value} index={0}>
          <th>
             <lable className={classes.username}>Email/Username</lable>
              <br />
              <input className={classes.textbox} type="text" />
              <br />
              <lable className={classes.username}>Create Password</lable>
              <br />
              <input className={classes.textbox} type="password" />
              <div className="forget">Forget Password</div>
              <Button className="login-submit-button" style={{background: "#D3262A 0% 0% no-repeat padding-box",color: "#FFFFFF"}}> Sign In </Button>
          </th>
          <th style={{paddingLeft: "121px"}}>
             <Button className={classes.google}><i className="fab fa-google">Sign in with Google</i></Button>
             <Button className={classes.facebook}><FacebookIcon style={{marginLeft: "-25px"}} /> Sign in with Facebook </Button>
             <Typography className={classes.enrolled}>Not Enrolled yet ? Why Don't you Sign up quickly here</Typography>
             <Button className={classes.signIn}> Sign In </Button>
          </th>
         </TabPanel>
        <TabPanel value={value} index={1}>
        <th>
             <lable className={classes.username}>Email/Username</lable>
              <br />
              <input className={classes.textbox} type="text" />
              <br />
              <lable className={classes.username}>Create Password</lable>
              <br />
              <input className={classes.textbox} type="password" />
              <div className="forget">Forget Password</div>
              <Button className="login-submit-button" style={{background: "#D3262A 0% 0% no-repeat padding-box",color: "#FFFFFF"}}> Sign In </Button>
          </th>
          <th style={{paddingLeft: "121px"}}>
             <Button className={classes.google}><i className="fab fa-google">Sign in with Google</i></Button>
             <Button className={classes.facebook}><FacebookIcon style={{marginLeft: "-25px"}} /> Sign in with Facebook </Button>
             <Typography className={classes.enrolled}>Not Enrolled yet ? Why Don't you Sign up quickly here</Typography>
             <Button className={classes.signIn}> Sign In </Button>
          </th>

        </TabPanel>
      </div>
    </div>
    )
}