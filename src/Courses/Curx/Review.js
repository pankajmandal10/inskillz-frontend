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
      width: "100%",
      height: "74px",
    },
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table class="uk-table uk-width-1-1">

        <thead className="reviewHeadTab">
          <tr>
            <th className="review-chapter-name" >Chapter Name</th>
            <th className="review-course-material" >Course Material</th>
            <th className="review-course-material" >Course Material</th>
          </tr>
        </thead>
       
        <tbody>
        <tr>
           <td></td>
           <td></td>
           <td></td>
          </tr>
        <tr>
            <td> <p className="review-chapter-name-text">What are the cruxes of social Media</p></td>
            <td>
              <ReviewStar />
              <input className="curx-text-box" type="text" />
            </td>
            <td>
              <ReviewStar />
              <input className="curx-text-box" type="text" />
            </td>

          </tr>
          <tr>
            <td> <p className="review-chapter-name-text">What are the cruxes of social Media</p></td>
            <td>
              <ReviewStar />
              <input className="curx-text-box" type="text" />
            </td>
            <td>
              <ReviewStar />
              <input className="curx-text-box" type="text" />
            </td>

          </tr>
        </tbody>
      </table>

     

      {/* <tr style={{ padding: "15px 0px 20px  14px", height: "96px" }}>
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

      <hr /> */}
    </div >
  );
}
