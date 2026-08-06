import api from "../services/api";
import type { User } from "./User";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
}

export async function doLogin(data: LoginRequest): Promise<LoginResponse | null> {
  try {
    const response = await api.post<LoginResponse>('token/', data);
    saveUser(response.data); 
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar o Login!", error);
    return null;
  }
}

function saveUser(data: LoginResponse) {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token_access", data.access);
  localStorage.setItem("token_refresh", data.refresh);
}

export function clearUser() {
  localStorage.clear();
}

export function updateLocalStorageUser(updatedUser: User) {
  localStorage.setItem("user", JSON.stringify(updatedUser));
}

export function getCurrentUser(): User | null {
  const userJson = localStorage.getItem("user");
  if (!userJson) return null;
  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    return null;
  }
}