import type { Post } from "./Post";
import type { User } from "./User";

export interface Midea {
    id: number;
    owner: User;
    post?: Post;
    image_profile: boolean;
    file?: Blob;
    link: string;
}