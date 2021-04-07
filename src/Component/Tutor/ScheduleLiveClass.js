import React, {useState} from 'react';
import "./Tutor.css"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Dropdown from "./Dropdown"
import Batch from './Batch';


let courseName = ["Choose Course", "Java", "java Script", "C", "C++"];
let batches = [1,2,3,4,5,6,7,8,9,10];

const styles = (theme) => ({
  root: {
    margin: 0,
    width: "100%",
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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
  },
}))(MuiDialogActions);

export default function ScheduleLiveClass() {
  const [open, setOpen] = React.useState(false);
  const [name, setName]= useState("Choose Course")

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let handleChange = (e) => {
    const newName = e.target.value;
    setName({ name: newName });
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p className="schedule-live-class" style={{marginBottom: "0rem"}}>Schedule Live Class</p>
          <p className="schedule-view-calender" style={{marginBottom: "0rem"}}>View your Calender</p>
        </DialogTitle>
        <DialogContent>

        <div class="uk-grid" uk-grid>
          <div>
            <div class="uk-card-body">
             <p className="schedule-course-language">Course Language</p>
             <p className="schedule-course-language">Course Name</p>
             <p className="schedule-course-language">Chapter Name</p>
             <p className="schedule-course-language">Instructor Name</p>
             <p className="schedule-course-language">Number Of Batches</p>
            </div>
          </div>
          <div>
            <div class="uk-card-body">
              <p className="schedule-course-language">English</p>
              <p>
                <div id="select-dropdown">
                  <select className="select-courses-name" onChange={(e)=>handleChange(e)}>
                   {courseName.map(Course => (
                   <option value={Course}>{Course}</option>
                   ))}
                  </select>
                </div>
              </p>
              <p><input  className="select-courses-name" placeholder="Chapter 02 The Crux of Social media" /></p>
              <p>
              <div class="uk-grid" uk-grid>
                 <div class="uk-card-body">
                   <input  className="select-instructor-name" placeholder="Joseph Smith" />
                 </div>
                 <div class="uk-card-body">
                   <button className="add-instructor-button">Add Instructor</button>
                 </div>
              </div>
              </p>
              <p>
               <div id="select-dropdown" style={{width:"200px"}}>
                 <select className="select-courses-name" style={{width:"228px"}} onChange={(e)=>handleChange(e)}>
                   {batches.map(Course => (
                   <option value={Course}>{Course}</option>
                   ))}
                 </select>
               </div>
             </p>
            </div>
          </div>
        </div>
        <div  style={{marginTop: "26px"}}>
         <Batch batchName="Batch1" />
        </div>
        <div style={{marginTop: "26px"}}>
          <Batch  batchName="Batch2"/>
        </div>
        <div style={{marginTop: "26px"}}>
          <Batch batchName="Batch3"/>
        </div>
        <div style={{marginTop: "26px"}}>
        <Batch  batchName="Batch4"/>
        </div>   
        <button className="schedule-now">Schedule Now</button>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}