import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

//nécessaire pour le redux dev tools extension chrome
const reduxDevTools =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevTools);

store.subscribe(() => {
   console.log('State ato amn store: ');
   console.log(store.getState());
});
