import { User } from "../typings/index";
import { useContext, createContext, ProviderProps } from "react";

export interface UserCtx {
  user: User;

  setUser(user: User): void;
}

export const UserProvider = ({ value, children }: ProviderProps<any>) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserContext = createContext(null);

// @ts-expect-error It starts off as null
export const useUser = () => useContext<UserCtx>(UserContext);
