import { combineReducers } from 'redux';
import {
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAIL,
  GET_ALL_COURSES_FAIL,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
} from '../actions/actionTypes';

export const addNewCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADD_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case GET_ALL_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case GET_ALL_COURSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const courseReducer = combineReducers({
  addNewCourse: addNewCourseReducer,
  getAllCourses: getAllCoursesReducer,
});
