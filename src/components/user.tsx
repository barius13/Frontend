import { useContext, createContext } from "react";

export interface UserCtx {
  user: User;

  setUser(user: User): void;
}

const UserContext = createContext(null);

export const UserProvider = ({ value, children }: any) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// @ts-expect-error I don't know how to type this
export const useUser = () => useContext<UserCtx>(UserContext);
