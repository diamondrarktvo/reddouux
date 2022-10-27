import produce from 'immer';

import { addTodo, deleteTodo } from '../actions/action_creator';

const todoState = {
   todo: [],
};

export const todoReducer = (state = todoState, action) => {
   switch (action.type) {
      case addTodo().type:
         return produce(state, (draft) => {
            draft.todo.push(action.payload);
         });

      case deleteTodo().type:
         return produce(state, (draft) => {
            draft.todo = draft.todo.filter((todo) => todo !== action.payload);
         });
      default:
         return state;
   }
};
