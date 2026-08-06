import api from "../services/api";
import type { User } from "./User";

export interface Friend {
  id: number;
  friend_one: User;
  friend_two: User;
  date_start: Date;
}

export interface FriendResponse {
  id: number;
  friend_one: number;
  friend_one_username: string;
  friend_two: number;
  friend_two_username: string;
  date_start: Date;
}

export async function getAllFriendsByUserId(id:number) : Promise<FriendResponse[] | null> {
  try {
    const response = await api.get<FriendResponse[]>(`friends/${id}/user/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos amigos do usuário!", error);
    return null;
  }
}