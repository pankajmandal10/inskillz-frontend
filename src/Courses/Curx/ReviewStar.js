import React from 'react';
import "./Curx.css"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const labels = {
  1: 1.0,
  1.5: 1.5,
  2: 2.0,
  2.5: 2.5,
  3: 3.0,
  3.5: 3.5,
  4: 4.0,
  4.5: 4.5,
  5: 5.0,
};

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
const useStyles = makeStyles({
  root: {
    width: 77,
    height:9,
    display: 'flex',
    alignItems: 'center',
    color: "#282A2C",
    marginLeft:3,
    fontSize:11
  },
});

export default function ReviewStar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className={classes.root}>
      <Box component="fieldset" borderColor="transparent">
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          value={value}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        />
      </Box>
      <div className="revTxt">
      {value !== null && <Box >{labels[hover !== -1 ? hover : value]}</Box>}
      </div>
    </div>
  );
}