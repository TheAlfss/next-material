import React, { useState } from "react";

interface IAuth {
  login: (username: string, password: string) => Promise<void>;
  isLogged: boolean;
  currentUser: any | undefined;
}
export const AuthContext = React.createContext({} as IAuth);

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const login = async (username: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      if (username === "tiorick" && password === "1234") {
        return resolve();
      }
      return reject();
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        currentUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
