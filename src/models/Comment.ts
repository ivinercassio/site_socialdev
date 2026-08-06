import api from "../services/api";
import type { Post } from "./Post";
import type { User } from "./User";

export interface Comment {
    id: number;
    text: string;
    post: Post;
    owner: User;
    date_published: Date;
}

export interface CommentResponse {
    id: number;
    text: string;
    post: number;
    post_title: string;
    owner: number;
    owner_username: string;
    date_published: Date;
}

export async function getAllCommentsPostById(id: number | string): Promise<CommentResponse[] | null> {
  try {
    const response = await api.get<CommentResponse[]>(`comments/${id}/post/`);
    return response.data; 
  } catch (error) {
    console.error("Falha ao realizar get dos Comments!", error);
    return null;
  }
}