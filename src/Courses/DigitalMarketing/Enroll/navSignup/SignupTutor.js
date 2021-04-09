import React, { useState } from 'react';
import '../StudentLogin.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function TabPanel(props) {
  //initialize
  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.user.loign);

  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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
    textAlign: 'left',
    font: 'normal normal normal 15px/24px Roboto',
    color: '#143754',
    marginTop: 13,
  },
  textbox: {
    width: 200,
    height: 40,
    background: '#F4F4F4 0% 0% no-repeat padding-box',
    borderRadius: 6,
    border: 'none',
  },

  enrolled: {
    marginTop: 30,
    width: 172,
    height: 33,
    textAlign: 'center',
    font: 'normal normal 300 12px/19px Roboto',
    color: '#143754',
    marginBottom: 15,
  },
  signIn: {
    marginTop: 13,
    width: 200,
    height: 35,
    background: '#3583C5 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: 6,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
}));

export default function SignupTutor(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  function validateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }

    return false;
  }

  function validatePhone(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handelCreateAccount = () => {};

  return (
    <div className='studentLoginModal'>
      <div className={classes.root}>
        <div className={classes.demo1}>
          <TabPanel value={value} index={0} className='signup'>
            <div className='separator-signup'></div>
            <span className='separatorTxt-signup'>Or</span>
            <div className='uk-child-width-1-2 uk-grid'>
              <div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>First Name</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='text'
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                  <br />
                </div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>Last Name</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='text'
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                  <br />
                </div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>Email</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='text'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <br />
                </div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>Phone</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='text'
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <br />
                </div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>Create Password</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className='uk-margin-small-bottom'>
                  <lable className={classes.username}>Conform Password</lable>
                  <br />
                  <input
                    className={classes.textbox}
                    type='password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>

              <div style={{ paddingTop: '8vh' }}>
                <button className='googleSign uk-text-left'>
                  <i className='fab fa-google fa-lg uk-margin-right'></i>Sign Up
                  with Google
                </button>
                <button className='facebookSign  uk-text-left uk-margin-small-top'>
                  <i className='fab fa-facebook fa-lg uk-margin-small-right'></i>
                  Continue with Facebook
                </button>
                <Typography className={classes.enrolled}>
                  Have already an account ?{' '}
                  <a href='#' onClick={props.close}>
                    Login here
                  </a>
                </Typography>
                {/* <Button className={classes.signIn} onClick={submit}> Create Account </Button> */}
                <Button
                  className='login-submit-button'
                  style={{
                    background: '#3583C5 0% 0% no-repeat padding-box',
                    color: '#FFFFFF',
                  }}
                  onClick={handelCreateAccount}
                >
                  {' '}
                  Create Account{' '}
                </Button>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
