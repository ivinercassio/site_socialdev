import type { Friend } from "./Friend";
import type { User } from "./User";

export interface Message {
    id: number;
    friend: Friend;
    from: User;
    to: User;
    text: string;
    data_published: Date;
}