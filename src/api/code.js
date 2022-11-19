import { getToken } from './token';

export const getCode = () => {
  const token = getToken();
  let code = '';
  // eslint-disable-next-line no-restricted-globals
  if (!token && location.search.includes('?code')) {
    // eslint-disable-next-line no-restricted-globals
    code = new URLSearchParams(location.search.substring(1)).get('code');
    // eslint-disable-next-line no-restricted-globals
  } else {
    code = null;
  }

  return code;
};
