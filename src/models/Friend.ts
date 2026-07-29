import type { User } from "./User";

export interface Friend {
    id: number;
    friend_one: User;
    friend_two: User;
    date_start: Date;
}