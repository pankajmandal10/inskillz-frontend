import React from 'react';
import "../ProfileDetails/ProfileDetails.css";
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
import pdf from '../Image/pdf.svg'
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

export default function Downloadables(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div>
            <div className="disSwitcher uk-grid uk-visible@s" uk-grid="true">
                <div className="tabSec">
                    <ul class="uk-tab-left" uk-tab="connect: #discussion">
                        <li>
                            <a >
                                <div>
                                    <div className="uk-flex uk-flex-between ">
                                        <p class="dwnldChapterNo">Chapter 01</p>
                                    </div>
                                    <h5 className="uk-margin-bottom tabHead resHead">The Crux Of Digital Marketing</h5>
                                    <p class="tabResources">12 Resources</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                <div>
                                    <div className="uk-flex uk-flex-between ">
                                        <p class="dwnldChapterNo">Chapter 01</p>
                                    </div>
                                    <h5 className="uk-margin-bottom tabHead resHead">Why Digital Marketing ?</h5>
                                    <p class="tabResources">12 Resources</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                <div>
                                    <div className="uk-flex uk-flex-between ">
                                        <p class="dwnldChapterNo">Chapter 01</p>

                                    </div>
                                    <h5 className="uk-margin-bottom tabHead resHead">Why Digital Marketing ?</h5>
                                    <p class="tabResources">12 Resources</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                <div>
                                    <div className="uk-flex uk-flex-between ">
                                        <p class="dwnldChapterNo">Chapter 01</p>

                                    </div>
                                    <h5 className="uk-margin-bottom tabHead resHead">Why Digital Marketing ?</h5>
                                    <p class="tabResources">12 Resources</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                <div>
                                    <div className="uk-flex uk-flex-between ">
                                        <p class="dwnldChapterNo">Chapter 01</p>
                                    </div>
                                    <h5 className="uk-margin-bottom tabHead resHead">Why Digital Marketing ?</h5>
                                    <p class="tabResources">12 Resources</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul id="discussion" class="uk-switcher">
                    <li>
                        <div className="shadow bg-body rounded uk-margin-small-bottom">
                            <p className="get-started-text">All Resources</p>
                        </div>
                        <div className="resourceContainer">
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>

                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
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
                        <p class="dwnldChapterNo">Chapter 01</p>
                    </div>
                    <h5 className="uk-margin-bottom tabHead resHead">Why Digital Marketing ?</h5>
                    <p class="tabResources">12 Resources</p>

                </div>
                <div className="ansBlock">
                <div className="shadow bg-body rounded uk-margin-small-bottom">
                            <p className="get-started-text">All Resources</p>
                        </div>
                        <div className="resourceContainer">
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>

                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                            <div className="uk-flex uk-flex-between uk-margin-top">
                                <h3 className="dwnldName">What are the cruxes of social. Mediaa doc</h3>
                                <button className="tabDwnld"><img className="uk-margin-small-right" src={pdf} /> Download</button>
                            </div>
                            <hr></hr>
                        </div>

                </div>
            </div>
        </div>
    );
}