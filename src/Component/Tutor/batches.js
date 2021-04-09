import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PdfUpload from './pdfUpload';
import DocUpload from './docUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 'none',
  },
  heading: {
    width: '100%',
    height: '7vh',
    border: 'none',
    borderRadius: 6,
    paddingLeft: 20,
  },
  pdfUpload: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
  },
  inputType: {
    background: '#FBFBFB 0% 0% no-repeat padding-box',
  },
}));

export default function Batches(props) {
  const classes = useStyles();
  const [chapter, setChapter] = useState({
    chapter: '',
    url: '',
    doc: '',
  });

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
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h6>Batch 1</h6>
        </AccordionSummary>
        <AccordionDetails className={classes.pdfUpload}>
          <div className='dropContain'>
            <Typography style={{ background: '#FFFFFF' }}>
              <div className='uk-child-width-1-3@s uk-text-left uk-grid'>
                <div>
                  <label className='edit-course-name'>Batch Name</label>
                  <input
                    name='batchName'
                    value={props.batch.batchName}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='Batch A'
                  />
                </div>
                <div>
                  <label className='edit-course-name'>
                    Max Students Allowed
                  </label>
                  <input
                    name='maxStudents'
                    value={props.batch.maxStudents}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='100'
                  />
                </div>
                <div>
                  <label className='edit-course-name'>Class Start Date</label>
                  <input
                    name='startDate'
                    value={props.batch.classStartDate}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='DD:MM:YYYY'
                  />
                </div>
                <div className='uk-margin-top'>
                  <label className='edit-course-name'>Class End Date</label>
                  <input
                    name='endDate'
                    value={props.batch.classEndDate}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='DD:MM:YYYY'
                  />
                </div>
                <div className='uk-margin-top'>
                  <label className='edit-course-name'>Class Start Time</label>
                  <input
                    name='startTime'
                    value={props.batch.classStartTime}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='HH:MM'
                  />
                </div>
                <div className='uk-margin-top'>
                  <label className='edit-course-name'>Class End Time</label>
                  <input
                    name='endTime'
                    value={props.batch.classEndTime}
                    onChange={(e) => props.onInputBatch(e)}
                    className='edit-inputBatch'
                    type='text'
                    placeholder='HH:MM'
                  />
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
