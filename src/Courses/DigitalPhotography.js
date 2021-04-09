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
  const dispatch = useDispatch();

  const { loading, error, courses } = useSelector(
    (state) => state.course.getAllCourses
  );

  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);

  return (
    <div class='photoContain'>
      <div className='uk-width-1-1 uk-grid uk-child-width-1-3'>
        {courses.map((course) => (
          <div>
            <Link to='#'>
              <Card1
                name={course.courseName}
                img={course.bannerImage}
                rating={course.rating}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalPhotography;
