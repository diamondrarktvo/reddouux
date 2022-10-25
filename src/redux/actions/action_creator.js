import {
   INCREMENT_STATE,
   DECREMENT_STATE,
   ADD_NEW_USER,
   REMOVE_USER,
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
