import type { User } from "./User";

export interface Post {
    id: number;
    title: string;
    legend: string;
    author: User;
    like: number;
    date_published: Date;
}