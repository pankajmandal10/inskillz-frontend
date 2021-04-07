import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PdfUpload from './pdfUpload'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border:"none"
  },
  heading: {
    width: "68vw",
    height: "7vh",
    border: "none",
    borderRadius: 6
  },
  pdfUpload: {
    background: "#F4F4F4 0% 0% no-repeat padding-box",
    
  },
  inputType: {
    background: "#FBFBFB 0% 0% no-repeat padding-box",
  }
}));

export default function Chapter() {
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
          <input className={classes.heading} placeholder="abc" />
        </AccordionSummary>
        <AccordionDetails className={classes.pdfUpload}>
          <Typography style={{background:"#FFFFFF"}}>
              <PdfUpload  />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}