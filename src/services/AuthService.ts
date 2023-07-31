import { type Ref, ref } from 'vue';

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref('');
    this.error = ref('');
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const res = await fetch(import.meta.env.VITE_APP_RUTA_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const response = await res.json();
      if ('message' in response) {
        this.error.value = 'Login failed';
        return false;
      }
      console.log(response.access_token);
      this.jwt.value = response.access_token;
      return true;
    } catch (error) {
      this.error.value = 'Login failed';
      return false;
    }
  }
}

export default AuthService;
