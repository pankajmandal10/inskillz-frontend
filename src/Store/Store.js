import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducers';

const userInfoFromStorage = localStorage.getItem('loggedIn')
  ? JSON.parse(localStorage.getItem('loggedIn'))
  : null;

const reducer = combineReducers({
  user: userReducer,
  course: courseReducer,
});

const initialState = {
  user: {
    login: {
      userInfo: userInfoFromStorage,
    },
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
