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


export default function ViewProgress() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="marketing-button" onClick={handleClickOpen} style={{left: "97px", width: "247px",background: "#FFFFFF"}}> View Progress </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         <p className="digital-marketing-batchs">Digital Marketing - Batchs</p>
        </DialogTitle>
        <DialogContent>
        <p className="course-name">Course Name <span className="course-fee">Course Fee</span></p>
            <p className="why-digital-marketing">Why Digital Marketing ?<span className="course-fee-amount">$300</span></p>
            <p className="batches" dividers>Batches</p>
            <hr /> 
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022<span><button className="enroll-now-button">Enroll Now</button></span></p>
            <hr />
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022<span><button className="enroll-now-button">Enroll Now</button></span></p>
            <hr />
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022<span><button className="enroll-now-button">Enroll Now</button></span></p>
            <hr />
            <p className="batch-name-date">Batch A 12th Jan 2021 - 14th Jan 2022<span><button className="enroll-now-button">Enroll Now</button></span></p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
