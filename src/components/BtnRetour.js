import React from 'react';
import { Link } from 'react-router-dom';

export const BtnRetour = ({ path }) => {
   return (
      <div>
         <Link to={path}>
            <button className="btn btn-secondary">Retour</button>
         </Link>
      </div>
   );
};
