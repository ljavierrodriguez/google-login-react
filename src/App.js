import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({
    google: null,
    isLoggedIn: false,
  })
  const responseGoogle = (response) => {
    console.log(response);
    setState({
      ...state,
      google: response,
      isLoggedIn: true,
    })
  }

  const responseGoogleLogout = (response) => {
    console.log(response);
    setState({
      ...state,
      google: null,
      isLoggedIn: false,
    })
  }

  useEffect(() => {

    return () => {

    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          !!state.google && (
            <>
              <img src={state.google.profileObj.imageUrl} alt="avatar" style={{ width: '100px', height: '100px' }} />
              <p>{state.google.profileObj.name}</p>
              <p>{state.google.profileObj.givenName} {state.google.profileObj.familyName}</p>
              <p>{state.google.profileObj.email}</p>
            </>
          )
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          state.isLoggedIn ? (
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              buttonText="Logout"
              onLogoutSuccess={responseGoogleLogout}
            />
          ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
              />
            )
        }


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
