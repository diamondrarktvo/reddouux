import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import './SocialLogin.css';

function App() {
   useEffect(() => {
      function start() {
         gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: 'email',
         });
      }

      gapi.load('client:auth2', start);
   }, []);

   const handleLogin = (googleData) => {
      console.log('googleData : ', googleData);
   };
   const handleFailure = (result) => {
      console.log('failure :', result);
   };

   return (
      <div className="container App">
         <h2 className="text-success mb-5">
            Welcome eto amin'ny toerana ianarako Redux
         </h2>
         <h3>Connectez-vous!</h3>
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            autoLoad={false}
         ></GoogleLogin>
         <Link to="/home">
            <button className="start mt-4 btn btn-primary">Get Started</button>
         </Link>
      </div>
   );
}

export default App;
