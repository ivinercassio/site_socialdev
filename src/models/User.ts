import api from "../services/api";
import { doLogin, type LoginRequest } from "./LoginDTO";

export interface User {
  id: number;
  username: string;
  password: string;
  public: boolean;
  about: string;
  type: "CLIENT" | "ADMIN";
  creation_date: Date;
}

export async function getUserById(id: number): Promise<User | null >{
  try {
    const response = await api.get<User>(`users/${id}/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos dados do usuário!", error);
    return null;
  }
}

export async function chageVisibility(user: User, visible: boolean, password: string): Promise<User | null >{
  try {
    const objeto: LoginRequest = { username: user.username, password: password };
    const authenticated = doLogin(objeto);
    if (authenticated !== null) {
      const update = { public: visible };
      const response = await api.patch<User>(`users/${user.id}/`, update);
      return response.data; 
    }
    return null;
  } catch (error) {
    console.error("Falha ao atualizar visibilidade do usuário!", error);
    return null;
  }
}