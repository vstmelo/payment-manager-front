import {
    ILogin
} from '../schemas/interfaces';
import { api } from 'api/axios';

export async function login(params: ILogin): Promise<Object> {
    const res = await api.post<ILogin, string>('/login', params);
    return res;
}
