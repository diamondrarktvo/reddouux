import { combineReducers } from 'redux';

import { profilReducer } from './profilReducer';
import { todoReducer } from './todoReducer';

export const reducer = combineReducers({
   todo: todoReducer,
   profil: profilReducer,
});
