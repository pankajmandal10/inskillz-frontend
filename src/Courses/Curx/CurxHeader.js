import React from 'react';
import "./Curx.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  curx: {
    marginTop: "-21px",
    minWidth: 275,
    height: 116,
    background: "#143754 0% 0% no-repeat padding-box",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CurxHeader() {
  const classes = useStyles();

  return (
    <div className="cruxHeader">

    <Card className={classes.curx} variant="outlined">
      <div className="uk-flex uk-flex-between">
        <td className="curx-header-padding">
          <p className="digitalMarketing">Digital Marketing</p>
          <p className="curxSocialMedia">02 Curx Of Social Media</p>
        </td>
        <td className="curx-header-progress-padding">
          <div className="uk-flex uk-flex-between">
          <div className="crux-progress-name">Progress</div>
          <div className="uk-hidden@s mobilePer">50%</div>

          </div>
          <div className="uk-flex">
            <div className="progress" >
              <div className="progress-bar" role="progressbar" style={{ width: "50%", background: "#35C635 0% 0% no-repeat padding-box" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="crux-progress-percentage">50%</p>
          </div>
          <p className="curx-view-status">View Status <span style={{ paddingLeft: "26px" }}> Visit Course page</span></p>
        </td>
      </div>
    </Card>
    </div>
  );
}