import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface IAuthContextProps {
  email: string | undefined;
  accessToken: string | undefined;
  userDetails: string | undefined;

  login(email: string, password: string): void;
  logout(): void;
}
const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {

  const [email, setEmail] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");

  const login = useCallback((email: string, password: string) => {
    console.log("Login do context");
    
    // chamar o backend para validar o login
    // se ok, salvar o token e o email no state

    setEmail(email);
    setAccessToken(crypto.randomUUID());

  }, []);

  const userDetails = useMemo(() => { // serve para memorizar valores calculados e tem sempre que retornar algum valor
    return "O email do usuario é: " + email;
  }, [email])

  const logout = useCallback(() => {}, []); // usando useCallback para nao recriar a funcao toda vez. a funcao nao sera reinicializada a nao ser que alguma dependencia mude

  return (
    <AuthContext.Provider value={{ login, logout, accessToken, email, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const useIsAuthenticated = () => {
    const {accessToken} = useAuthContext();
    return accessToken !== undefined && accessToken !== '';
}