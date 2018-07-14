import axios from 'axios';

export function getUser(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => response);
}
