import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    albums: albumsReducer,
    users: usersReducer
});