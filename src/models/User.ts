export interface User {
    id: number;
    username: string;
    password: string;
    public: boolean;
    about: string;
    type: "CLIENT" | "ADMIN";
    creation_date: Date;
}

export function getUser(id: number): User | null {
    return null;
}