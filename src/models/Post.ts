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
    author: User;
    author_username: string;
    like: number;
    date_published: Date;
}

export function getAllPostsByUserId(id: number): Post[] | null {
    return null;
}

export async function getAllPosts(): Promise<Post[] | null> {
  try {
    const response = await api.get<Post[]>('posts/');
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos Posts!", error);
    return null;
  }
}