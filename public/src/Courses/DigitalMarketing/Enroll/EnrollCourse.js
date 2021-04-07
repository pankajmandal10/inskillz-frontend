import React from 'react';
import "./Modal.css"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import StudentLogin from './StudentLogin';




const styles = (theme) => ({
  root: {
      width:550,
    margin: 0,
    padding: theme.spacing(2),
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function EnrollCourse(props) {


  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
         <p className="digital-marketing-batchs">Enroll for the Course</p>
        </DialogTitle>
        <DialogContent>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <p className="enroll-course-name">Course Name </p>
            <p className="why-digital-marketing">Why Digital Marketing ?<span className="course-fee-amount"></span></p>
            <p className="enroll-price">Price</p>
            <p className="enroll-course-price">$300</p>
            </div>
            <div className="col-6 col-md-4">
              <div>
                <select className="form-select" aria-label="Default select example">
                  <option className="batch-dropdown-options" selected>Batch A</option>
                  <option className="batch-dropdown-options" value="1">Batch A 12th Jan 2021 - 14th Jan 2022</option>
                  <option className="batch-dropdown-options" value="2">Batch A 12th Jan 2021 - 14th Jan 2022</option>
                  <option className="batch-dropdown-options" value="3">Batch A 12th Jan 2021 - 14th Jan 2022</option>
                </select>
                <button onClick={props.modalOpen} className="get-enroll">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{paddingTop: "15px"}}>
          <div className="row">
            <div className="col-6">
                <p className="instructor-name">Instructor/Institute Name</p>
                <p className="instructor-name">Institute</p>
                <p className="instructor-name">Duration</p>
                <p className="instructor-name">Lectures</p>
            </div>
            <div className="col-6">
                <p className="enroll-user-details">Joseph Smith</p>
                <p className="enroll-user-details">Independent</p>
                <p className="enroll-user-details">7 Weeks</p>
                <p className="enroll-user-details">6</p>
            </div>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
