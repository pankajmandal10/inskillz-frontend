import React from 'react';


import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  root: {
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
    course: {
        textAlign: "left",
        font: "normal normal normal 12px/14px Roboto",
        color: "#282A2C",
        marginBottom:6
      },
      digital:{
        textAlign: "left",
        font: "normal normal bold 18px/21px Roboto",
        color: "#143754"
      },
     
      instructor: {
        textAlign: "left",
        font: "normal normal normal 16px/19px Roboto",
        color: "#143754",
        height:'30px'
      },
      instructorName: {
        textAlign: "left",
        font: "normal normal 500 16px/19px Roboto",
        color: "#143754",
        height:'30px'

      },
      passed: {
        textAlign: "right",
        font: "italic normal 300 16px/19px Roboto",
        color: "#35C635",
      },
      inProgress: {
        textAlign: "right",
        font: "italic normal 300 16px/19px Roboto",
        color: "#D88C13",
      },
      progressPercent: {
        textAlign: "right",
        font: "normal normal 500 16px/19px Roboto",
        color: "#143754",
        marginTop: "-33px",
        paddingLeft: "204px",
      },
     
    
  }));

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


export default function ViewProgress(props) {
    const classes = useStyles();
  

  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
      <p className={classes.course}>Course Name</p>
      <div className={classes.digital}>Why Digital Marketing ? <span className="visit">Visit Course page</span> </div>
        </DialogTitle>
        <DialogContent>
        <th>
            <p className={classes.instructor}>Instructor Name</p>
            <p className={classes.instructor}>Institute</p>
            <p className={classes.instructor}>Duration</p>
            <p className={classes.instructor}>Lectures</p>
            <p style={{marginBottom:'30px'}} className={classes.instructor}>Start / Purchase Date</p>
            <p className={classes.instructor}>Progress</p>
            <p className={classes.instructor}>Current Lession</p>
        </th>
        <th className="progressRightContain" style={{paddingLeft:"158px"}}>
            <p className={classes.instructorName}>Joseph Smith</p>
            <p className={classes.instructorName}>Independent</p>
            <p className={classes.instructorName}>7 Weeks</p>
            <p className={classes.instructorName}>6</p>
            <p style={{marginBottom:'30px'}} className={classes.instructorName}>12-01-2021, 2.10PM</p>
            <p className={classes.instructorName}>
            <div className="progress" style={{height: "7px",width:"190px"}}>
              <div className="progress-bar" role="progressbar" style={{width: "50%", background: "#35C635 0% 0% no-repeat padding-box"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              
            </div>
            <p className={classes.progressPercent} >50%</p>
            </p>
            <p className={classes.instructorName}>Chapter 02,<br />The Crux of Social media</p>
        </th>
        <hr className="noMrg" />
        <p className={classes.instructor}>Mark/ Score List (Chapter Wise)</p>

        <th >
            <p className={classes.instructor}>Chapter 01 Basice Intro</p>
            <p className={classes.instructor}>Chapter 01 The Crux of Social media</p>
        </th>
        <th className="progressRightContain2" style={{paddingLeft:"73px"}}>
            <p className={classes.instructorName}>60/100</p>
            <p className={classes.instructorName}></p>
        </th>
        <th className="progressRightContain2" style={{paddingLeft:"73px"}}>
            <p className={classes.passed}>Passed</p>
            <p className={classes.inProgress}> In Progress</p>
        </th>
        </DialogContent>
      </Dialog>
    </div>
  );
}