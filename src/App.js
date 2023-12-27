/** Should not be seen by an interviewee */

import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const submitSignIn = () => {
    setUsernameError('');
    setPasswordError('');
    setGeneralError('');
    
    if (!password) { setPasswordError("Please enter a password."); }
    if (!username) { setUsernameError("Please enter a username"); }

    // "correct" login
    if (username && password && username == "test" && password == "test") {
      setIsSignedIn(true);
      return;
    } 
    // general error    
    else if (username && password) {
      setGeneralError('Username and password combination are incorrect.');
    }
  }
  console.log("USERNAME ERROR: ", usernameError);
  return (

    <div className="App">
      {
        isSignedIn ?
        <h2 data-testid="welcome-user" id='welcome-user'>{username}</h2> 
        :
        <>
        <h3>Sign in</h3>
        <div className='input-container'>
          <input id="username-input" onChange={(e) => { setUsername(e.target.value)}} required placeholder='enter username'></input>
          {usernameError ? <p id="username-error" className='username-error'>{usernameError}</p> : null}
          <input id="password-input" onChange={(e) => { setPassword(e.target.value)}} required placeholder='enter password'></input>
          {passwordError ? <p className='password-error'>{passwordError}</p> : null}
        </div>
        <button id="submit" onClick={() => {submitSignIn()}}>Submit</button>
        {generalError ? <p className='general-error'>{generalError}</p> : null}
        </>
      }

    </div>
  );
}

export default App;
