import api from "../services/api";
import type { User } from "./User";

export interface Friend {
    id: number;
    friend_one: User;
    friend_two: User;
    date_start: Date;
}

export async function getAllFriendsByUserId(id:number) : Promise<Friend[] | null> {
  try {
    const response = await api.get<Friend[]>(`friends/${id}/user`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos amigos do usuário!", error);
    return null;
  }
}