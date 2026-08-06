import api from "../services/api";
import type { User } from "./User";

export interface Post {
    id: number;
    title: string;
    legend: string;
    author: User;
    like: number;
    date_published: Date;
}

export interface PostResponse {
    id: number;
    title: string;
    legend: string;
    author: number;
    author_username: string;
    like: number;
    date_published: Date;
}

export async function getAllPostsByUserId(id: number): Promise<PostResponse[] | null> {
  try {
    const response = await api.get<PostResponse[]>(`posts/${id}/user/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos Posts!", error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostResponse[] | null> {
  try {
    const response = await api.get<PostResponse[]>('posts/');
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos Posts!", error);
    return null;
  }
}

export async function getPostById(id: number | string): Promise<PostResponse | null> {
  try {
    const response = await api.get<PostResponse>(`posts/${id}/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get do Post pelo id!", error);
    return null;
  }
}

export async function markPostAsLiked(id:number, cont:number, ) {
  try {
    const response = await api.put<PostResponse[]>(`posts/${id}/`, {like: cont});
    return response.data; 
  } catch (error) {
    console.error("Falha ao atualizar o contado de likes Post!", error);
    return null;
  }
}