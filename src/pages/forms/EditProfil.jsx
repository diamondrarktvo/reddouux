import React, { useState } from 'react';
import { BtnRetour } from './../../components/BtnRetour';
import './AddUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/actions/action_creator';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const EditUser = () => {
   const { idUser } = useParams();
   const dispatch = useDispatch();
   const users = useSelector((state) => state.profil.users);
   const userToModified = users.filter((user) => user.id === parseInt(idUser));
   const [userFound, setUserFound] = useState(
      userToModified.length !== 0
         ? {
              id: userToModified[0].id,
              name: userToModified[0].name,
              surname: userToModified[0].surname,
              age: userToModified[0].age,
           }
         : null
   );

   const onHandleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
         case 'name':
            setUserFound((prevState) => ({
               ...prevState,
               name: value,
            }));
            break;
         case 'surname':
            setUserFound((prevState) => ({
               ...prevState,
               surname: value,
            }));
            break;
         case 'age':
            setUserFound({ ...userFound, age: value });
            break;
         default:
            break;
      }
   };

   const hoverBoutton = (e) => {
      let number = (Math.floor(Math.random() * 10) + 5) * 100;
      if (
         userFound.name === '' &&
         userFound.surname === '' &&
         userFound.age === 0
      ) {
         e.target.style.marginLeft = number + 'px';
      }
   };

   return (
      <div className="container my-4">
         <BtnRetour path="/profil" />
         {userToModified.length !== 0 ? (
            <div className="formulaire form-group d-flex flex-column align-items-center">
               <h1>Modifier profil</h1>
               <div className="form-floating w-25">
                  <label htmlFor="nom">ID profil</label>
                  <input
                     type="number"
                     disabled={true}
                     id="id"
                     className="form-control"
                     name="id"
                     value={userFound.id}
                  />
               </div>

               <div className="form-floating w-25">
                  <label htmlFor="nom">Nom</label>
                  <input
                     type="text"
                     id="nom"
                     className="form-control"
                     name="name"
                     value={userFound.name}
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
                     value={userFound.surname}
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
                     value={userFound.age}
                     onChange={(e) => onHandleChange(e)}
                  />
               </div>

               <Link to="/profil">
                  <button
                     id="submitButton"
                     className="btn btn-primary"
                     onMouseOver={(e) => hoverBoutton(e)}
                     onClick={() => {
                        if (
                           userFound.name &&
                           userFound.surname &&
                           userFound.age
                        ) {
                           dispatch(editUser(userFound));
                           setUserFound({
                              ...userFound,
                              id: userFound.id,
                              name: '',
                              surname: '',
                              age: 0,
                           });
                        } else {
                           alert('Les champs sont requis!!!');
                        }
                     }}
                  >
                     Modifier
                  </button>
               </Link>
            </div>
         ) : (
            <div className="row">
               <h1 className="text-danger text-center">
                  Veuillez sélectionner un profil svp !!!!
               </h1>
            </div>
         )}
      </div>
   );
};
