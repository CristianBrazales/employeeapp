import { createContext, useState } from "react";
const AuthContext = createContext({});
//wrapper to use context api from react, should be use on main page
export const AuthProvider = ({ children }) => {
  var loggedInUser = JSON.parse(localStorage.getItem("app_state"));

  let initialState = loggedInUser || {};

  const [authentication, setAuthentication] = useState(initialState);
  return (
    <AuthContext.Provider value={{ authentication, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
