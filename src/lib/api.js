import axios from 'axios';

export function get(url, params) {
  return axios({
    method: 'GET',
    url,
    params
  });
}

export function byMethod(method, url, data) {
  return axios({
    method,
    url,
    data
  });
}
