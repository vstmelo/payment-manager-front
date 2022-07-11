import { api } from "api/axios";

export const login = async (email: string, pass:string) =>
  await api.post(`/login`, { email: email, pass: pass });
