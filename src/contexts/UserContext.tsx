import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type User } from "../models/User";
import { getCurrentUser, clearUser, doLogin, type LoginRequest, updateLocalStorageUser } from "../models/LoginDTO";

interface UserContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<User | null>;
  logout: () => void;
  updateUserVisibility: (updateUser: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (credentials: LoginRequest) => {
    const response = await doLogin(credentials);
    if (response) {
      setUser(response.user);
      return response.user;
    }
    return null;
  };

  const logout = () => {
    clearUser();
    setUser(null);
  };

  const updateUserVisibility = (updatedUser: User) => {
    setUser(updatedUser);
    updateLocalStorageUser(updatedUser);
    console.log("LocalStorage e Context sincronizados com sucesso para public:", updatedUser.public);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUserVisibility }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}