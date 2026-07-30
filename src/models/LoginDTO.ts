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
    localStorage.setItem("token_access", JSON.stringify(data.access));
    localStorage.setItem("token_refresh", JSON.stringify(data.refresh));
}

export function clearUser() {
    localStorage.clear();
}