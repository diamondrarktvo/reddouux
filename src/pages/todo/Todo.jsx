import React from 'react';
import { BtnRetour } from '../../components/BtnRetour';

export const Todo = () => {
   return (
      <div className="container my-4">
         <BtnRetour path="/home" />
         <div className="col-md-12 my-4 mx-5">
            <div className="todos col-md-6 border border-info d-flex flex-column">
               <h2 className="text-center">A faire</h2>
               <div className="w-100">
                  <div className="d-flex justify-content-center">
                     <span>+</span>
                     <h5>Test</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                     <span>+</span>
                     <h5>Test</h5>
                  </div>
               </div>
            </div>
            <div className="my-4 col-md-6 d-flex justify-content-center">
               <button className="btn btn-primary">Ajouter</button>
            </div>
         </div>
      </div>
   );
};
