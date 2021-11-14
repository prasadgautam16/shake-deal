import { combineReducers } from 'redux';
import team from './team';
import message from './message';


export default combineReducers({
    team,
    message
});