import React from 'react';
import { Link } from 'react-router-dom';
import { BtnRetour } from '../../components/BtnRetour';
import './Home.css';

export const Home = () => {
   return (
      <div className="container my-3">
         <BtnRetour path={'/'} />
         <div className="m-4">
            <h1>Home section</h1>
            <Link to="/compteur">
               <button className="btn btn-primary">Compteur</button>
            </Link>

            <Link to="/profil">
               <button className="btn btn-secondary">Profil</button>
            </Link>

            <Link to="/add-profil">
               <button className="btn btn-light">Add Profil</button>
            </Link>

            <Link to="/todo">
               <button className="btn btn-info">Add Todo</button>
            </Link>
         </div>
      </div>
   );
};
