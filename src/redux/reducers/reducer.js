import produce from 'immer';
import { DECREMENT_STATE, INCREMENT_STATE } from '../actions/action_names';
import { addNewUserAction, removeUser } from '../actions/action_creator';

export const initialState = {
   colorNombre: 'text-danger',
   nombre: 0,
   warning: false,
   users: [],
};

export const reducer = (state = initialState, action) => {
   const { nombre } = state;
   switch (action.type) {
      case INCREMENT_STATE:
         if (nombre >= 5 && nombre < 10) {
            return produce(state, (draft) => {
               draft.nombre += 1;
               draft.colorNombre = 'text-black';
               draft.warning = false;
               return;
            });
         }
         if (nombre >= 10) {
            return produce(state, (draft) => {
               draft.colorNombre = 'text-success';
               draft.nombre += 1;
               draft.warning = false;
               return;
            });
         }
         //syntaxe sans immer
         return {
            ...state,
            nombre: state.nombre + 1,
            warning: false,
         };

      case DECREMENT_STATE:
         if (nombre === 0) {
            return {
               ...initialState,
               warning: true,
            };
         }
         if (nombre > 5 && nombre < 10) {
            return produce(state, (draft) => {
               draft.colorNombre = 'text-black';
               draft.nombre -= 1;
               return;
            });
         }
         if (nombre >= 10) {
            return produce(state, (draft) => {
               draft.colorNombre = 'text-success';
               draft.nombre -= 1;
               return;
            });
         }
         if (nombre <= 5) {
            return produce(state, (draft) => {
               draft.colorNombre = 'text-danger';
               draft.nombre -= 1;
               return;
            });
         }
         break;

      case addNewUserAction().type:
         let { id, name, surname, age } = action.payload;
         if (name && surname && age) {
            return produce(state, (draft) => {
               let userTemp = {
                  id: id,
                  name: name,
                  surname: surname,
                  age: age,
               };
               draft.users.push(userTemp);
            });
         }
         return state;

      case removeUser().type:
         let iduser = action.payload;
         return produce(state, (draft) => {
            draft.users = draft.users.filter(
               (user) => parseInt(user.id) !== parseInt(iduser)
            );
         });

      default:
         return state;
   }
};
