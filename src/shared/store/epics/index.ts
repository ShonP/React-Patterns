import couterEpics from './couterEpic';
import { combineEpics } from 'redux-observable';

export default combineEpics(...couterEpics);
