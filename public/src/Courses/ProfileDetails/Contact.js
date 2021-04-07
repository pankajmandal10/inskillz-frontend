import React from 'react';
import "./ProfileDetails.css"
import { Card } from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({


}));
export default function Contact(props) {
  const classes = useStyles();
  return (

    <div className="accContainer">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className="contactCardHead">Contact Details</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div >
              <div className="uk-flex-between uk-flex uk-width-1-1 uk-margin-small-bottom">
                <p className="contact-text"><MailOutlineIcon style={{ fontSize: "24px" }} /><span style={{ paddingLeft: "20px" }}>{props.email}</span></p>
                <i className="fas fa-edit"></i>
              </div>
              <div className="uk-flex-between uk-flex uk-width-1-1 uk-margin-small-bottom">
                <p className="contact-text"><CallIcon style={{ fontSize: "24px" }} /><span style={{ paddingLeft: "20px" }}>+91 {props.contact}</span></p>
                <i className="fas fa-edit"></i>
              </div>
              <div className="uk-flex-between uk-flex uk-width-1-1 uk-margin-small-bottom">
                <p className="contact-text"><RoomOutlinedIcon style={{ fontSize: "24px" }} />
                  <span style={{ paddingLeft: "20px" }}>{props.city}</span><br></br>
                  <span style={{ paddingLeft: "45px" }}>{props.street},</span><br />
                  <span style={{ paddingLeft: "45px" }}>  {props.pin}</span>
                </p>
                <i className="fas fa-edit"></i>
              </div>
             
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
