import api from "../services/api";
import type { CommentResponse } from "./Comment";
import type { Post, PostResponse } from "./Post";
import type { User } from "./User";

export interface Report {
    id: number;
    post?: Post;
    comment?: Comment;
    owner: User;
    date_report: Date;
}

export interface ReportResponse {
    id: number;
    post?: number;
    post_title?: string;
    comment?: number;
    comment_text?: string;
    date_report: Date;
}

export async function reportPost(post: PostResponse, reason: string): Promise<ReportResponse | null >{
  const object = { post: post.id , reason: reason }
  try {
    const response = await api.post<ReportResponse>(`reports/`, object);
    return response.data; 
  } catch (error) {
    console.error("Falha ao criar report do post!", error);
    return null;
  }
}

export async function reportComment(comment: CommentResponse, reason: string): Promise<ReportResponse | null >{
  const object = { comment: comment.id , reason: reason }
  try {
    const response = await api.post<ReportResponse>(`reports/`, object);
    return response.data; 
  } catch (error) {
    console.error("Falha ao criar report do post!", error);
    return null;
  }
}