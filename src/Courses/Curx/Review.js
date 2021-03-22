import React from 'react';
import "./Curx.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReviewStar from "./ReviewStar"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: "95%",
      height: "74px",
    },
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <div className="reviewHeadTab uk-child-width-1-3 uk-grid">
<div>
<th className="review-chapter-name" >Chapter Name</th>
</div>
<div>
<th className="review-course-material" >Course Material</th>
</div>
<div>
<th className="review-instructor-performance" >Instructor Performance</th>
</div>

      </div>
      <tr style={{ padding: "15px 0px 20px  14px", height: "96px" }}>
        <th className="review-chapter-name-text">What are the cruxes of social Media</th>
        <th className="review-course-material-text">
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
        <th className="review-instructor-performance-text" >
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
      </tr>
      <hr />

      <tr style={{ padding: "15px 0px 20px  14px", height: "96px" }}>
        <th className="review-chapter-name-text">What are the cruxes of social Media</th>
        <th className="review-course-material-text">
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
        <th className="review-instructor-performance-text" >
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
      </tr>
      <hr />

      <tr style={{ padding: "15px 0px 20px  14px", height: "96px" }}>
        <th className="review-chapter-name-text">What are the cruxes of social Media</th>
        <th className="review-course-material-text">
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
        <th className="review-instructor-performance-text" >
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
      </tr>
      <hr />
      <tr style={{ padding: "15px 0px 20px  14px", height: "96px" }}>
        <th className="review-chapter-name-text">What are the cruxes of social Media</th>
        <th className="review-course-material-text">
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
        <th className="review-instructor-performance-text" >
          <ReviewStar />
          <input className="curx-text-box" type="text" />
        </th>
      </tr>

      <hr />
    </div>
  );
}
