import React from 'react';
import "./Curx.css"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.text.secondary,
    // '&:hover > $content': {
    //   // backgroundColor: theme.palette.action.hover,
    //   color: "#3583C5"
    // },
    // '&:focus > $content, &$selected > $content': {
    //   // backgroundColor: `var(--tree-view-bg-color, ${ "#3583C5"})`,
    //   color: 'var(--tree-view-color)',
    //   color: "#3583C5"
    // },
    // '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
    //   // backgroundColor: 'transparent',
    //   color: "#3583C5"
    // },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  // labelRoot: {
  //   display: 'flex',
  //   alignItems: 'left',
  //   padding: theme.spacing(0.5, 0),
  // },
//   labelIcon: {
//     marginRight: theme.spacing(1),
//   },
  labelText: {
    font: "normal normal 300 20px/35px Roboto",
    color: "#143754",
    textAlign: "left",
    margin:"15px 10px" ,
    '&:hover': {
      color: "#3583C5",
    }
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {/* <LabelIcon color="inherit" className={classes.labelIcon} /> */}
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
//   labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
      
   
    flexGrow: 1,
    maxWidth: 400,
    paddingBottom: 36,
  },
  media:{
      paddingLeft:29,
  }
});

export default function CourseContentSidebar() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      
    >
      <StyledTreeItem nodeId="1" labelText="01 Introduction"/>
      <StyledTreeItem nodeId="2"  labelText="02 Curx Of Social Media" >
        <StyledTreeItem
          className={classes.media}
          nodeId="10"
          color="#1a73e8"
          labelText="What are the cruxes of social Media"
        />
        <StyledTreeItem
          nodeId="11"
          className={classes.media}
          labelText="Why Social Media is important"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" labelText="03 Never To Miss Out"/>
      <StyledTreeItem nodeId="4" labelText="04 Utilising Social Media"/>
      <StyledTreeItem nodeId="5" labelText="05 Social Media For Business"/>
      <StyledTreeItem nodeId="6" labelText="06 Chapter 06"/>
      <StyledTreeItem nodeId="7" labelText="07 Final Things To Remember"/>
      <StyledTreeItem nodeId="8" labelText="08 Social Media For Business"/>
      <StyledTreeItem nodeId="9" labelText="09 Chapter 06"/>
    </TreeView>
  );
}