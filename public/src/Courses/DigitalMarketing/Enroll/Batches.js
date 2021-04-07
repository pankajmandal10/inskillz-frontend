import React from 'react';
import "./Modal.css"

import { withStyles } from '@material-ui/core/styles';
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


export default function Batches(props) {




  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          <p className="digital-marketing-batchs">Digital Marketing - Batches</p>
        </DialogTitle>
        <DialogContent>
          <div class="uk-flex uk-flex-between">
            <div>
              <p className="course-name">Course Name </p>
              <p className="why-digital-marketing">Why Digital Marketing ?</p>
            </div>
            <div style={{ marginRight: '40px' }}>
              <p className="course-fee">Course Fee</p>
              <p className="course-fee-amount">$300</p>
            </div>
          </div>

          <p className="batches" dividers>Batches</p>
          <hr />
          <div className="uk-flex uk-flex-between">
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022</p>
            <button onClick={props.enrol} className="enroll-now-button">Enroll Now</button>
          </div>
          <hr />
          <div className="uk-flex uk-flex-between">
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022</p>
            <button  onClick={props.enrol} className="enroll-now-button">Enroll Now</button>
          </div>          <hr />
          <div className="uk-flex uk-flex-between">
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022</p>
            <button  onClick={props.enrol} className="enroll-now-button">Enroll Now</button>
          </div>          <hr />
          <div className="uk-flex uk-flex-between">
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022</p>
            <button  onClick={props.enrol} className="enroll-now-button">Enroll Now</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}