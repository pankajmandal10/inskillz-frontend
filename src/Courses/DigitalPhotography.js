import React, { Component, useEffect } from 'react';
import Card1 from '../Component/Student/comp/Card1';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from 'react-router-dom';
import image6 from '../Component/Assets/image/image6.png';
import image2 from '../Component/Assets/image/image2.png';
import image3 from '../Component/Assets/image/image3.png';
import image4 from '../Component/Assets/image/image4.png';
import image5 from '../Component/Assets/image/image5.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesAction } from '../Store/actions/courseActions';

const DigitalPhotography = () => {
  //initialize
  const dispatch = useDispatch();
  const { loading, error, courses } = useSelector(
    (state) => state.course.getAllCourses
  );
  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);
  console.log(courses);
  return (
    <div class='photoContain'>
      <div uk-slideshow='true'>
        <div
          class='uk-position-relative uk-visible-toggle uk-light'
          tabindex='-1'
          uk-slideshow='true'
        >
          <ul class='uk-slideshow-items'>
            {courses.map((course) => (
              <li key={course._id}>
                <Card1 img={course.overViewImage} name={course.courseName} />
              </li>
            ))}
          </ul>

          {/* <a
              class='uk-position-center-left uk-position-small uk-hidden-hover'
              href='#'
              uk-slidenav-previous
              uk-slideshow-item='previous'
            ></a>
            <a
              class='uk-position-center-right uk-position-small uk-hidden-hover'
              href='#'
              uk-slidenav-next
              uk-slideshow-item='next'
            ></a> */}
        </div>
        <ul class='uk-slideshow-nav uk-dotnav uk-flex-center '></ul>
      </div>
    </div>
  );
};

export default DigitalPhotography;
