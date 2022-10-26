import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import SocialLogin from './pages/Login/SocialLogin';
import { Home } from './pages/home/Home';
import { Compteur } from './pages/compteur';
import { Profil } from './pages/profil';
import { AddUser } from './pages/forms/AddUser';
import { NotFoundPage } from './pages/error';
import './index.css';

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { EditUser } from './pages/forms/EditProfil';

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <BrowserRouter>
            <Switch>
               <Route exact path="/not-found" component={NotFoundPage} />
               <Route exact path="/">
                  <SocialLogin />
               </Route>
               <Route exact path="/home">
                  <Home />
               </Route>
               <Route exact path="/profil">
                  <Profil />
               </Route>
               <Route exact path="/add-profil">
                  <AddUser />
               </Route>
               <Route exact path="/edit-profil/:idUser">
                  <EditUser />
               </Route>
               <Route exact path="/compteur">
                  <Compteur />
               </Route>
               <Redirect from="*" to="/not-found" />
            </Switch>
         </BrowserRouter>
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
