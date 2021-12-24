import { User } from "../typings";
import { useContext, createContext } from "react";

export interface UserCtx {
  user: User;

  setUser(user: User): void;
}

const UserContext = createContext(null);

export const UserProvider = ({ value, children }: { value: any, children: any }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
