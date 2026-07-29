import type { Post } from "./Post";
import type { User } from "./User";

export interface Report {
    id: number;
    post: Post;
    owner: User;
    date_published: Date;
}