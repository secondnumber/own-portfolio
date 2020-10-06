import { combineReducers, createStore } from 'redux';
import menuReducer from './reducers/menuReducer';
import aboutReducer from './reducers/aboutReducer';
import contactsReducer from './reducers/contactsReducer';
import projectsReducer from './reducers/projectsReducer';
import socialReducer from './reducers/socialReducer';

let reducers = combineReducers({
  about: aboutReducer,
  contacts: contactsReducer,
  menu: menuReducer,
  projects: projectsReducer,
  social: socialReducer,
});

let store = createStore(reducers);

export default store;
