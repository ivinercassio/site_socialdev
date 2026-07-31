import api from "../services/api";
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

export async function getMideaProfile(id: number): Promise<Midea | null> {
  let midea = localStorage.getItem("midea_profile");
  if (midea !== null) 
    return JSON.parse(midea);
  else {
    const data = await getMideaProfileUserById(id);
    if (data)
      localStorage.setItem("midea_profile", JSON.stringify(data));
    return data;
  }
}

export async function getMideaProfileUserById(id: number): Promise<Midea | null> {
  try {
      const response = await api.get<Midea>(`mideas/${id}/user`);
      return response.data; 
  } catch (error) {
      console.error("Falha ao realizar o get da Midea Profile do usuário!", error);
      return null;
  }
}

export async function getAllMideasByPostId(id:number): Promise<Midea[] | null> {
    try {
    const response = await api.get<Midea[]>(`mideas/${id}/post`);
    return response.data; 
  } catch (error) {
    console.error(`Falha ao realizar get das Mideas do Post #${id}!`, error);
    return null;
  }
}