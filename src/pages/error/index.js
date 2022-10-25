import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
   return (
      <div className="container my-3">
         <Link to="/">
            <button className="btn btn-secondary">Retour à l'accueil</button>
         </Link>
         <div className="text-center m-5 text-danger">
            <h1>404 Not found !</h1>
         </div>
      </div>
   );
};
