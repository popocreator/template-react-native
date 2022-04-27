import axios from 'axios';

class apple {
  server: string = '';

  constructor() {
    this.server = 'http://identity.popomon.club';
  }

  getCsrfToken(payload?: any) {
    const url = `${this.server}/csrfToken`;
    return axios.get(url);
  }

  login(payload?: any) {
    const url = `${this.server}/user`;
    return axios.post(url, payload);
  }

  logout(payload?: any) {
    const url = `${this.server}/user`;
    return axios.post(url, payload);
  }

  signUp(payload?: any) {}

  resetPassword() {}
}

export default new apple();
