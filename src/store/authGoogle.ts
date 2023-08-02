import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { defineStore } from 'pinia';
import jwt_decode from 'jwt-decode';
import router from '@/router';

const useAuthGoogleStore = defineStore('authGoogle', {
  state: () => {
    return {
      user: {} as any,
      baseURl: 'http://127.0.0.1:8000/api',
      picture: String,
      dataUser: Object || JSON.parse(localStorage.getItem('user') ?? '')
    };
  },
  actions: {
    async logInGoogle() {
      try {
        await GoogleAuth.signOut();
        const response = await GoogleAuth.signIn();
        this.user = jwt_decode(response.authentication.idToken);

        const dataUser = {
          email: this.user.email,
          picture: this.user.picture,
          give_name: this.user.given_name,
          family_name: this.user.family_name
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(dataUser));

        /* const { sub, name, given_name, family_name, picture, email } = this.user; */

        router.push({ name: 'home' });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async refresh() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const authCode = await GoogleAuth.refresh();
    },
    async logout() {
      try {
        this.user = '';
        localStorage.removeItem('user');
        /* await GoogleAuth.signOut() */
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  }
});

export default useAuthGoogleStore;
