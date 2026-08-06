import api from "../services/api";
import type { Post } from "./Post";
import type { Tag } from "./Tag";

export interface PostTag {
    id: number;
    tag: Tag;
    post: Post;
}

export async function getAllTagsByPostId(id: number): Promise<Tag[] | null> {
  try {
    const response = await api.get<Tag[]>(`post_tags/${id}/post/`);
    return response.data; 
  } catch (error) {
    console.error(`Falha ao realizar get das Tags do Post #${id}!`, error);
    return null;
  }
}