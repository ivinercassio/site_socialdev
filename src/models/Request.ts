import api from "../services/api";
import type { User } from "./User";

export interface FRequest {
  id: number;
  user_one: User;
  user_two: User;
  date_request: Date;
}

export interface FRquestResponse {
  id: number;
  user_one: number;
  user_one_username: string;
  user_two: number;
  user_two_username: string;
  date_request: Date;
}

export async function sendFriendRequest(two: number) {
  const object = { user_two: two };
  try {
    const response = await api.post<FRquestResponse>(`friend_requests/`, object);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos amigos do usuário!", error);
    return null;
  }
}