import React from 'react';
import "./Tutor.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    curx: {
    marginTop: "-21px",
    height: "19.2vh",
    background: "#143754 0% 0% no-repeat padding-box",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TutorFormHeader(props) {
  const classes = useStyles();

  return (
    <Card className={classes.curx} variant="outlined">
      <div className="tutorFormHeader">
         <div className="uk-flex">
            <div className="uk-width-1-2">{props.formHeadline}</div>
            <div className="uk-width-1-3 ">Visit All Courses Page</div>
         </div>
      </div>
    </Card>
  );
}