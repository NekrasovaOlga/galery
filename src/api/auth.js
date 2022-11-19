import {
  ACCESS_KEY,
  API_URL_AUTH,
  API_URL_TOKEN,
  CLIENT_SECRET,
  CODE,
  GRAND_TYPE,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from './const';

export const url = new URL(API_URL_AUTH);

url.searchParams.append('client_id', ACCESS_KEY);
url.searchParams.append('redirect_uri', REDIRECT_URI);
url.searchParams.append('response_type', RESPONSE_TYPE);
url.searchParams.append('scope', SCOPE);

export const urlToken = new URL(API_URL_TOKEN);

urlToken.searchParams.append('client_id', ACCESS_KEY);
urlToken.searchParams.append('client_secret', CLIENT_SECRET);
urlToken.searchParams.append('redirect_uri', REDIRECT_URI);
urlToken.searchParams.append('code', CODE);
urlToken.searchParams.append('grant_type', GRAND_TYPE);
