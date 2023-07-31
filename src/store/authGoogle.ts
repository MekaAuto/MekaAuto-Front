import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { defineStore } from 'pinia';
import router from '@/router';

const useAuthGoogleStore = defineStore('authGoogle', {
  state: () => {
    return {
      token: Object as any | null /* serverAuthCode */,
      email: null as string | null,
      fristName: null as string | null /* givenName */,
      lastName: null as string | null /* familyName */,
      imageUrl: null as string | null,
      user: Object as any | null,
      baseURl: 'http://127.0.0.1:8000/api'
    };
  },
  actions: {
    async logInGoogle() {
      try {
        const response = await GoogleAuth.signIn();
        router.push({ name: 'home' });
        this.user = response
        console.log(this.user);
        console.log(this.user.email);
        console.log(this.user.familyName);
        console.log(this.user.givenName);
        console.log(this.user.imageUrl);

        /*               
        console.log(response.authentication.accessToken);
        console.log(response.serverAuthCode);
        console.log(response.email);
        console.log(response.familyName);
        console.log(response.givenName);
        console.log(response.imageUrl); 
        */
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async refresh() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const authCode = await GoogleAuth.refresh();
      this.token = authCode.idToken
      console.log(this.token);
    } ,
    async logout () {
      try {
        await GoogleAuth.signOut()
        this.token = "";
        this.user = ""; 
      } catch (error) {
        console.error(error)
      }
    }
  }
});

export default useAuthGoogleStore;
