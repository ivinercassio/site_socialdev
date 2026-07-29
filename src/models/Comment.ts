import type { Post } from "./Post";
import type { User } from "./User";

export interface Comment {
    id: number;
    text: string;
    post: Post;
    owner: User;
    date_published: Date;
}