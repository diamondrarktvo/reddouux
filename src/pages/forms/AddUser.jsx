import React, { useState } from 'react';
import { BtnRetour } from './../../components/BtnRetour';
import './AddUser.css';
import { useDispatch } from 'react-redux';
import { addNewUserAction } from '../../redux/actions/action_creator';

export const AddUser = () => {
   const dispatch = useDispatch();
   const [userTemp, setUserTemp] = useState({
      id: 1,
      name: '',
      surname: '',
      age: 0,
   });

   const onHandleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
         case 'name':
            setUserTemp((prevState) => ({
               ...prevState,
               name: value,
            }));
            break;
         case 'surname':
            setUserTemp((prevState) => ({
               ...prevState,
               surname: value,
            }));
            break;
         case 'age':
            setUserTemp({ ...userTemp, age: value });
            break;
         default:
            break;
      }
   };

   const hoverBoutton = (e) => {
      let number = (Math.floor(Math.random() * 10) + 5) * 100;
      if (
         userTemp.name === '' &&
         userTemp.surname === '' &&
         userTemp.age === 0
      ) {
         e.target.style.marginLeft = number + 'px';
      }
   };

   return (
      <div className="container my-4">
         <BtnRetour path="/home" />
         <div className="formulaire form-group d-flex flex-column align-items-center">
            <h1>Ajouter nouvelle profil</h1>
            <div className="form-floating w-25">
               <label htmlFor="nom">ID profil</label>
               <input
                  type="number"
                  disabled={true}
                  id="id"
                  className="form-control"
                  name="id"
                  value={userTemp.id}
               />
            </div>

            <div className="form-floating w-25">
               <label htmlFor="nom">Nom</label>
               <input
                  type="text"
                  id="nom"
                  className="form-control"
                  name="name"
                  value={userTemp.name}
                  onChange={(e) => onHandleChange(e)}
               />
            </div>

            <div className="form-floating w-25">
               <label htmlFor="prenom">Prénom</label>
               <input
                  type="text"
                  id="prenom"
                  className="form-control"
                  name="surname"
                  value={userTemp.surname}
                  onChange={(e) => onHandleChange(e)}
               />
            </div>

            <div className="form-floating w-25">
               <label htmlFor="age">Age</label>
               <input
                  type="number"
                  id="age"
                  className="form-control"
                  name="age"
                  value={userTemp.age}
                  onChange={(e) => onHandleChange(e)}
               />
            </div>

            <button
               id="submitButton"
               className="btn btn-primary"
               onMouseOver={(e) => hoverBoutton(e)}
               onClick={() => {
                  if (userTemp.name && userTemp.surname && userTemp.age) {
                     dispatch(addNewUserAction(userTemp));
                     setUserTemp({
                        ...userTemp,
                        id: userTemp.id + 1,
                        name: '',
                        surname: '',
                        age: 0,
                     });
                  } else {
                     alert('Les champs sont requis!!!');
                  }
               }}
            >
               Ajouter
            </button>
         </div>
      </div>
   );
};
