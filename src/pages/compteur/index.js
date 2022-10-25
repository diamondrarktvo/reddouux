import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   incrementNbreAction,
   decrementNbreAction,
} from '../../redux/actions/action_creator';
import { BtnRetour } from '../../components/BtnRetour';

export const Compteur = () => {
   const nombre = useSelector((state) => state?.nombre);
   const warning = useSelector((state) => state?.warning);
   const colorNombre = useSelector((state) => state?.colorNombre);
   const dispatch = useDispatch();

   return (
      <div className="container my-3">
         <BtnRetour path={'/home'} />
         <div className="m-4">
            <h1>Compteur section</h1>
            <p>
               Compteur :{' '}
               <span className={`fs-4 fw-bold ${colorNombre}`}>{nombre}</span>
            </p>
            {warning && (
               <p className="text-danger">
                  <span className="fw-bold">WARN</span> : Le nombre ne peut pas
                  être négative!!
               </p>
            )}
            <section className="mt-4">
               <button
                  className="btn btn-success"
                  onClick={() => {
                     dispatch(incrementNbreAction());
                  }}
               >
                  Incrementer
               </button>
               <button
                  className="btn btn-info mx-4"
                  onClick={() => {
                     dispatch(decrementNbreAction());
                  }}
               >
                  Décrementer
               </button>
            </section>
         </div>
      </div>
   );
};
