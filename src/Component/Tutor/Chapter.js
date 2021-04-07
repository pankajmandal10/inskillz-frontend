import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PdfUpload from './pdfUpload'
import DocUpload from './docUpload'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border:"none"
  },
  heading: {
    width: "68vw",
    height: "7vh",
    border: "none",
    borderRadius: 6,
    paddingLeft:20,
  },
  pdfUpload: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    
  },
  inputType: {
    background: "#FBFBFB 0% 0% no-repeat padding-box",
  }
}));

export default function Chapter() {
  const classes = useStyles();
  const[chapter , setChapter]= useState({
    chapter: '',
    url: '',
    doc: '',
  });;

  const onInputChapter = (e) => {
    setChapter({
      ...chapter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
        className={classes.inputType}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <input className={classes.heading} placeholder="Enter Chapter Name" />
        </AccordionSummary>
        <AccordionDetails className={classes.pdfUpload}>
          <Typography style={{background:"#FFFFFF"}}>
          <label className='edit-course-name uk-margin-top'>
                Enter Video URL
              </label>
              <input
                name='url'
                value={chapter.url}
                onChange={(e) => onInputChapter(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='Type here'
              />
              <div>
                <div className='dropContain uk-margin-top'>
                  <DocUpload />
                </div>
              </div>
          
              {/* <PdfUpload  /> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
