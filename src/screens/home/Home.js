import React, { useState } from 'react';

import  SignUp  from "../signup/SignUp"
import { LoginPage } from '../login';
import './home.style.css';

export const Home = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="login-container">
      <div className={`container ${active ? 'active' : ''}`} id="container">
        <SignUp handleActive={handleActive} />
        <LoginPage handleActive={handleActive} />
        <div className="toggle-container">
          <div className="toggle">
            <div className={`toggle-panel toggle-left ${active ? '' : 'hidden'}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button onClick={handleActive}>Sign In</button>
            </div>
            <div className={`toggle-panel toggle-right ${active ? 'hidden' : ''}`}>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of the site features</p>
              <button onClick={handleActive}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AuthPage;
