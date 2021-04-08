import React from 'react';
import "../StudentLogin.css"
import Inskills from "../../../../Component/Assets/image/modalLogo.jpeg"
import StudentTab from "../StudentTab"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TeachTab from '../studTeachTab';
import SignupTab from './SignupTutor';
import SignupTutor from './SignupTutor';
import SignupStud from "./SignupStud"


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: "2.7vh 0px 0px 2.2vw",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "24px 0px 0px 47px",
  },
}))(MuiDialogContent);


export default function NavSignupStud(props) {
  

  return (
    <div className="signup-logo-inskillz">
      <Dialog onClose={props.handleClose1} aria-labelledby="customized-dialog-title" open={props.open1}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose1} >
        <div className="uk-flex">
          <div>
            <img className="inskills-logo" src={Inskills} />
          </div>
          <div>
            <div className="separators"></div>
          </div>
          <div>
            <p className="student-signUp">Student SignUp</p>
          </div>
        </div>
        {/* <img className="inskills-logo" src={Inskills} />
        <span className="separators"></span>
        <span ><h1 className="student-signUp">Student SignUp</h1></span> */}
        </DialogTitle>
        <DialogContent style={{paddingTop:"0px"}}>
           <SignupStud close={props.handleClose1} />
        </DialogContent>
      </Dialog>
    </div>
  );
}