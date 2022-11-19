import { getCode } from './code';

export const URL_API = 'https://api.unsplash.com';
export const API_URL_LIKE = 'https://unsplash.com/oauth';
export const API_URL_TOKEN = 'https://unsplash.com/oauth/token';
export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize';
export const ACCESS_KEY = 'eZfSl_yMJ3R7_bt829EFEKQI7kdCW64ppopAE6Js9ks';
export const CLIENT_SECRET = 'jHauZz0r6vowKJmXjFqK3LpttIc56WiPfy24Bchklf4';
export const CODE = getCode();
export const GRAND_TYPE = 'authorization_code';
export const REDIRECT_URI = 'http://localhost:3000/';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';
