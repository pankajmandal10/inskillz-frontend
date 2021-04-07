// import axios from 'axios';
import {
//   UPDATE_USER_ERROR,
//   UPDATE_USER_REQUEST,
//   UPDATE_USER_SUCCESS,
//   USER_LOGIN_ERROR,
//   USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './actionTypes';

//User Login Action
export const userLogin = () => async (dispatch) => {
  try {
    // dispatch({
    //   type: USER_LOGIN_REQUEST,
    // });

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    // const { data } = await axios.post(
    //   '/api/users/login',
    //   { email, password },
    //   config
    // );

    let data= true

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('loggedIn', JSON.stringify(data));
  } catch (error) {
    // dispatch({
    //   type: USER_LOGIN_ERROR,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};

//User Logout Action
export const userLogout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  await localStorage.removeItem('loggedIn');
//   await localStorage.removeItem('__paypal_storage__');
};

// //User Register Action
// export const userRegister = ({ name, email, password }) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       '/api/users',
//       { name, email, password },
//       config
//     );

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_ERROR,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
