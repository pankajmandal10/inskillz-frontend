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
    width: "100%",
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

export default function Chapter(props) {
  const classes = useStyles();
 

  

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
        className={classes.inputType}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6>Chapter {props.num}</h6>
        </AccordionSummary>
        <AccordionDetails className={classes.pdfUpload}>
          <div className="dropContain">
          <Typography style={{background:"#FFFFFF"}}>
          <label className='edit-course-name uk-margin-remove-top'>
                Enter Chapter Name
              </label>
              <input
                name='chapterName'
                value={props.chapter.chapterName}
                onChange={(e) => props.onInputChapter(e)}
                className='edit-inputType'
                type='text'
                placeholder='Type here'
              />
          <label className='edit-course-name uk-margin-top'>
                Enter Video URL
              </label>
              <input
                name='url'
                value={props.chapter.url}
                onChange={(e) => props.onInputChapter(e)}
                className='edit-inputType'
                type='text'
                placeholder='Type here'
              />
              <div>
                <div className='dropContain uk-margin-top uk-padding-small'>
                  <DocUpload inputChange={props.inputChange}/>
                </div>
              </div>
          
              {/* <PdfUpload  /> */}
          </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
