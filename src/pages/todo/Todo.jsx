import React, { useState } from 'react';
import { BtnRetour } from '../../components/BtnRetour';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../../redux/actions/action_creator';
import './Todo.css';

export const Todo = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todo.todo);
   const [todoTemp, setTodoTemp] = useState('');

   const onHandleChange = (e) => {
      const { value } = e.target;
      setTodoTemp(value);
   };
   return (
      <div className="container my-4">
         <BtnRetour path="/home" />
         <div className="col-md-12 my-4 mx-5">
            <div className="todos col-md-6 border border-info d-flex flex-column">
               <h2 className="text-center">A faire</h2>
               <div className="w-100">
                  {todos.length !== 0 ? (
                     todos.map((todo, index) => (
                        <div
                           className="d-flex justify-content-center"
                           key={index}
                        >
                           <div className="d-flex mx-4">
                              <span>+</span>
                              <h5>{todo}</h5>
                           </div>
                           <div className="d-flex fs-6">
                              <h5
                                 className="boutton_suppr text-danger"
                                 onClick={() => dispatch(deleteTodo(todo))}
                              >
                                 delete
                              </h5>
                           </div>
                        </div>
                     ))
                  ) : (
                     <p className="text-center">========== Vide ==========</p>
                  )}
               </div>
            </div>
            <div className="my-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
               <div className="form-floating w-50 my-3 py-3">
                  <label htmlFor="age">Todo</label>
                  <input
                     type="text"
                     id="todo"
                     className="form-control"
                     name="todo"
                     value={todoTemp}
                     onChange={(e) => onHandleChange(e)}
                  />
               </div>
               <button
                  className="btn btn-primary"
                  onClick={() => {
                     if (todoTemp) {
                        dispatch(addTodo(todoTemp));
                        setTodoTemp('');
                     } else {
                        alert('Veuillez renseigner votre TODO!!');
                     }
                  }}
               >
                  Ajouter
               </button>
            </div>
         </div>
      </div>
   );
};
