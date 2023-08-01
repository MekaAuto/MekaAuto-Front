import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { defineStore } from 'pinia';
import jwt_decode from 'jwt-decode'
import router from '@/router';

const useAuthGoogleStore = defineStore('authGoogle', {
  state: () => {
    return {
      user: {} as any ,
      baseURl: 'http://127.0.0.1:8000/api',
      picture: String
    };
  },
  actions: {
    async logInGoogle() {
      try {
        const response = await GoogleAuth.signIn();
        this.user = jwt_decode(response.authentication.idToken);

        const dataUser = {
          email: this.user.email,
          picture: this.user.picture,
          give_name: this.user.given_name,
          family_name: this.user.family_name
        } 

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(dataUser));
        /* const { sub, name, given_name, family_name, picture, email } = this.user; */

/*         console.log(sub)
        console.log(name)
        console.log(given_name)
        console.log(family_name)
        console.log(picture)
        console.log(email)
        console.log(this.user); */

        /* localStorage.setItem('user',) */
        router.push({ name: 'home' });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async refresh() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const authCode = await GoogleAuth.refresh();

    } ,
    async logout () {
      try {
        await GoogleAuth.signOut()
        this.user = ""; 
      } catch (error) {
        console.error(error)
      }
    }
  }
});

export default useAuthGoogleStore;
