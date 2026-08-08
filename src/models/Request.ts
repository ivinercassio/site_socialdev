import api from "../services/api";
import type { User } from "./User";

export interface FRequest {
  id: number;
  user_one: User;
  user_two: User;
  date_request: Date;
}

export interface FRequestResponse {
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
    const response = await api.post<FRequestResponse>(`friend_requests/`, object);
    return response.data; 
  } catch (error) {
    console.error("Falha ao enviar friend request do usuário!", error);
    return null;
  }
}

export async function getAllRequestsByUserId(id: number) {
  try {
    const response = await api.get<FRequestResponse[]>(`friend_requests/${id}/user/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get das friend requests recebidas pelo usuário!", error);
    return null;
  }
}