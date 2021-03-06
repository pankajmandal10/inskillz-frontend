import axios from 'axios';
import {
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAIL,
  GET_ALL_COURSES_FAIL,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
} from './actionTypes';

export const addNewCourseAction = (courseData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COURSE_REQUEST,
    });
    console.log(courseData);
    const { data } = await axios.post('/api/courses/addAcourse', courseData, {
      headers: {
        headers: { 'Content-type': 'application/form-data' },
      },
    });

    console.log(data);

    dispatch({
      type: ADD_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllCoursesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COURSES_REQUEST,
    });

    const { data } = await axios.get('/api/courses/listAllCourse');

    // console.log(data);

    dispatch({
      type: GET_ALL_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COURSES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CATEGORIES_REQUEST,
    });

    const { data } = await axios.get('/api/courses/getAllCategories');

    // console.log(data);

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
