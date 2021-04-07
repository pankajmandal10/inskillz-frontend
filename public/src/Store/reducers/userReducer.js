import { combineReducers } from 'redux';
import {
    UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    // USER_LOGIN_ERROR,
    // USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
  } from '../actions/actionTypes';
  
  export const loginReducer = (state = {}, action) => {
    switch (action.type) {
    //   case USER_LOGIN_REQUEST:
    //     return {
    //       ...state,
    //       loading: true,
    //     };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
        //   loading: false,
          userInfo: action.payload,
        };
    //   case USER_LOGIN_ERROR:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: action.payload,
    //     };
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
 export const userReducer = combineReducers({
      login: loginReducer
  })