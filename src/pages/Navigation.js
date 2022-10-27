import { Switch, Route, Redirect } from 'react-router-dom';

// all pages
import { EditUser } from './forms/EditProfil';
import { Todo } from './todo/Todo';
import SocialLogin from './Login/SocialLogin';
import { Home } from './home/Home';
import { Compteur } from './compteur';
import { Profil } from './profil';
import { AddUser } from './forms/AddUser';
import { NotFoundPage } from './error';

export const Navigation = () => {
   return (
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
         <Route exact path="/todo">
            <Todo />
         </Route>
         <Redirect from="*" to="/not-found" />
      </Switch>
   );
};
