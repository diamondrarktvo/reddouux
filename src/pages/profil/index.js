import React from 'react';
import { BtnRetour } from '../../components/BtnRetour';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actions/action_creator';

export const Profil = () => {
   const users = useSelector((user) => user.users);
   const dispatch = useDispatch();

   return (
      <div className="container my-3">
         <BtnRetour path={'/home'} />
         <div className="my-4 mx-4">
            <h1>Profil section</h1>
            <section className="row">
               <table className="table">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Anarana</th>
                        <th scope="col">Fanampiny</th>
                        <th scope="col">Taona</th>
                        <th scope="col">Bokotra</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users ? (
                        users.map((user, index) => (
                           <tr key={index}>
                              <th scope="row">{index}</th>
                              <td>{user.name}</td>
                              <td>{user.surname}</td>
                              <td>{user.age}</td>
                              <td>
                                 <button className="btn btn-info">Edit</button>
                                 <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                       dispatch(removeUser(user.id));
                                    }}
                                 >
                                    X
                                 </button>
                              </td>
                           </tr>
                        ))
                     ) : (
                        <td>Pas de profil enregistré!!!</td>
                     )}
                  </tbody>
               </table>
            </section>
         </div>
      </div>
   );
};
