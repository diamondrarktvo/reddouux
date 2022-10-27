import produce from 'immer';

import { addTodo } from '../actions/action_creator';

const todoState = {
   todo: [],
};

const todoReducer = (state = todoState, action) => {
   switch (action.type) {
      case addTodo().type:
         return state;
      default:
         return state;
   }
};
