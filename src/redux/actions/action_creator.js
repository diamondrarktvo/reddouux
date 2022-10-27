import {
   INCREMENT_STATE,
   DECREMENT_STATE,
   ADD_NEW_USER,
   REMOVE_USER,
   EDIT_USER,
   ADD_TODO,
   DELETE_TODO,
} from './action_names';

export const incrementNbreAction = () => ({
   type: INCREMENT_STATE,
});

export const decrementNbreAction = () => ({
   type: DECREMENT_STATE,
});

export const addNewUserAction = (newUser) => ({
   type: ADD_NEW_USER,
   payload: newUser,
});

export const removeUser = (idUser) => ({
   type: REMOVE_USER,
   payload: idUser,
});

export const editUser = (newUserAfterUpdate) => ({
   type: EDIT_USER,
   payload: newUserAfterUpdate,
});

export const addTodo = (todo) => ({
   type: ADD_TODO,
   payload: todo,
});

export const deleteTodo = (todo) => ({
   type: DELETE_TODO,
   payload: todo,
});
