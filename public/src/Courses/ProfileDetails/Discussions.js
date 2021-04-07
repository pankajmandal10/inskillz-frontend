import React from 'react';
import "./ProfileDetails.css";
import Profile from "../Image/profile.png"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>

  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 424,
  },
  tabs: {
    borderRight: `4px solid ${theme.palette.divider}`,
  },
}));

export default function Discussions(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div >
      <div className="disSwitcher uk-grid uk-visible@s" uk-grid="true">
        <div className="tabSec">
          <ul class="uk-tab-left" uk-tab="connect: #discussion">
            <li>
              <a >
                <div>
                  <div className="uk-flex uk-flex-between ">
                    <p class="tabTxt1">Panel</p>
                    <p class="tabTxt2">23 Members</p>
                  </div>
                  <h5 className="uk-margin-bottom tabHead">Why Digital Marketing ?</h5>
                  <p class="tabTxt2">12 Unanswered questions</p>
                </div>
              </a>
            </li>
            <li>
              <a >
                <div>
                  <div className="uk-flex uk-flex-between ">
                    <p class="tabTxt1">Panel</p>
                    <p class="tabTxt2">23 Members</p>
                  </div>
                  <h5 className="uk-margin-bottom tabHead">Why Digital Marketing ?</h5>
                  <p class="tabTxt2">12 Unanswered questions</p>
                </div>
              </a>
            </li>
            <li>
              <a >
                <div>
                  <div className="uk-flex uk-flex-between ">
                    <p class="tabTxt1">Panel</p>
                    <p class="tabTxt2">23 Members</p>
                  </div>
                  <h5 className="uk-margin-bottom tabHead">Why Digital Marketing ?</h5>
                  <p class="tabTxt2">12 Unanswered questions</p>
                </div>
              </a>
            </li>
            <li>
              <a >
                <div>
                  <div className="uk-flex uk-flex-between ">
                    <p class="tabTxt1">Panel</p>
                    <p class="tabTxt2">23 Members</p>
                  </div>
                  <h5 className="uk-margin-bottom tabHead">Why Digital Marketing ?</h5>
                  <p class="tabTxt2">12 Unanswered questions</p>
                </div>
              </a>
            </li>
            <li>
              <a >
                <div>
                  <div className="uk-flex uk-flex-between ">
                    <p class="tabTxt1">Panel</p>
                    <p class="tabTxt2">23 Members</p>
                  </div>
                  <h5 className="uk-margin-bottom tabHead">Why Digital Marketing ?</h5>
                  <p class="tabTxt2">12 Unanswered questions</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <ul id="discussion" class="uk-switcher">
          <li>
            <div className="shadow bg-body rounded">
              <div className="get-start-discussions uk-flex uk-flex-between">
                <p className="get-started-text">How to get started In Digital marketing Discussion</p>
                <p className="opened-on">Opened on <br /> Feb 14 2021</p>
              </div>
            </div>
            <div className="get-start-card">
              <div className="uk-flex">
                <img className="discussions-avtar" src={props.ProfileImg} />
                <p className="discussion-student-name">{props.studentName}</p>
              </div>

              <div className="discussion-student-text">
                <p className="discussion-student">Student</p>
              </div>
              <p className="discussion-student-chat">
                {props.studentChat}
                <hr />
                <div className="uk-flex">
                  <img className="discussions-avtar-1" src={props.ProfileImg1} />
                  <p className="discussion-student-name">{props.studentName1}</p>
                </div>
                <div className="discussion-student-text-2">
                  <p className="discussion-student">Student</p>
                </div>

                {props.studentChat1}
                <div style={{ height: '24px' }}><a href="#" className="more-replies">12 More Replies</a></div>
                <hr />
                <button className="reply-button">Reply</button>
                <div className="discussion-icons">
                  <span><ThumbUpIcon style={{ color: "#35C635", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.like}</span></span>
                  <span><ThumbDownIcon style={{ color: "#A5A5A5", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.dislike}</span></span>
                  <span><ReplyIcon style={{ color: "#A5A5A5", fontSize: "25px" }} /></span>
                </div>
              </p>
            </div>

            <div className="get-start-card">
              <div className="uk-flex">
                <img className="discussions-avtar" src={props.ProfileImg} />
                <p className="discussion-student-name">{props.studentName}</p>
              </div>

              <div className="discussion-student-text">
                <p className="discussion-student">Student</p>
              </div>
              <p className="discussion-student-chat">
                {props.studentChat}
                <hr />

                <button className="reply-button">Reply</button>
                <div className="discussion-icons">
                  <span><ThumbUpIcon style={{ color: "#35C635", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.like}</span></span>
                  <span><ThumbDownIcon style={{ color: "#A5A5A5", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.dislike}</span></span>
                  <span><ReplyIcon style={{ color: "#A5A5A5", fontSize: "25px" }} /></span>
                </div>
              </p>
            </div>
          </li>
          <li>
            Hloo
        </li>
        </ul>
      </div>
      <div className="uk-hidden@s">
        <div className="questBlock">
          <div className="uk-flex uk-flex-between ">
            <p class="tabTxt1">Panel</p>
            <p class="tabTxt2">23 Members</p>
          </div>
          <h5 className=" tabHead">Why Digital Marketing ?</h5>
          <p class="tabTxt2">12 Unanswered questions</p>
        </div>
        <div className="ansBlock">
          <div className="shadow bg-body rounded ">
            <div className="get-start-discussions uk-flex uk-flex-between">
              <p className="get-started-text">How to get started In Digital marketing Discussion</p>
              <p className="opened-on">Opened on <br /> Feb 14 2021</p>
            </div>
          </div>
          <div className="get-start-card">
            <div className="uk-flex">
              <img className="discussions-avtar" src={props.ProfileImg} />
              <p className="discussion-student-name">{props.studentName}</p>
            </div>

            <div className="discussion-student-text">
              <p className="discussion-student">Student</p>
            </div>
            <p className="discussion-student-chat">
              {props.studentChat}
              <hr />
              <div className="uk-flex">
                <img className="discussions-avtar-1" src={props.ProfileImg1} />
                <p className="discussion-student-name">{props.studentName1}</p>
              </div>
              <div className="discussion-student-text-2">
                <p className="discussion-student">Student</p>
              </div>

              {props.studentChat1}
              <div style={{ height: '24px' }}><a href="#" className="more-replies">12 More Replies</a></div>
              <hr />
              <button className="reply-button">Reply</button>
              <div className="discussion-icons">
                <span><ThumbUpIcon style={{ color: "#35C635", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.like}</span></span>
                <span><ThumbDownIcon style={{ color: "#A5A5A5", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.dislike}</span></span>
                <span><ReplyIcon style={{ color: "#A5A5A5", fontSize: "25px" }} /></span>
              </div>
            </p>
          </div>

          <div className="get-start-card">
            <div className="uk-flex">
              <img className="discussions-avtar" src={props.ProfileImg} />
              <p className="discussion-student-name">{props.studentName}</p>
            </div>

            <div className="discussion-student-text">
              <p className="discussion-student">Student</p>
            </div>
            <p className="discussion-student-chat">
              {props.studentChat}
              <hr />

              <button className="reply-button">Reply</button>
              <div className="discussion-icons">
                <span><ThumbUpIcon style={{ color: "#35C635", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.like}</span></span>
                <span><ThumbDownIcon style={{ color: "#A5A5A5", fontSize: "23px" }} /><span className="icon-text uk-margin-small-left">{props.dislike}</span></span>
                <span><ReplyIcon style={{ color: "#A5A5A5", fontSize: "25px" }} /></span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}