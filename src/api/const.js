import { getCode } from './code';

export const URL_API = 'https://api.unsplash.com';
export const API_URL_LIKE = 'https://unsplash.com/oauth';
export const API_URL_TOKEN = 'https://unsplash.com/oauth/token';
export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize';
export const ACCESS_KEY = 'DxUuTfQeejRWLdJbF6KgJwozHTtiDmS-Axo2BtCFqwM';
export const CLIENT_SECRET = 'woJva3pwGFuiZJ5FCe4B-1r5w97etc9y0ylyqz52e5U';
export const CODE = getCode();
export const GRAND_TYPE = 'authorization_code';
export const REDIRECT_URI = 'http://localhost:3000/';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';
