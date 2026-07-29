import type { Post } from "./Post";
import type { Tag } from "./Tag";

export interface PostTag {
    id: number;
    tag: Tag;
    post: Post;
}