import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type User } from "../models/User";
import { getCurrentUser, clearUser, doLogin, type LoginRequest } from "../models/LoginDTO";

interface UserContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<boolean>;
  logout: () => void;
  updateUserVisibility: (newVisibility: boolean) => void;
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
      return true;
    }
    return false;
  };

  const logout = () => {
    clearUser();
    setUser(null);
  };

  // Função para atualizar a visibilidade reativamente
  const updateUserVisibility = (newVisibility: boolean) => {
    if (user) {
      const updatedUser = { ...user, isPublic: newVisibility };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser)); 
    }
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