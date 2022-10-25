import React, {useState, createContext} from 'react';

import {loginRequest} from './authentication.service';

export const AuthenticationContex = createContext();

const AuthenticationContexProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        console.log(u);
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContex.Provider value={{user, isLoading, error, onLogin}}>
      {children}
    </AuthenticationContex.Provider>
  );
};

export default AuthenticationContexProvider;
