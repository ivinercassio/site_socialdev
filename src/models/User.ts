import api from "../services/api";

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
    const response = await api.get<User>(`users/${id}`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos dados do usuário!", error);
    return null;
  }
}