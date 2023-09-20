import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { defineStore } from 'pinia';
import jwt_decode from 'jwt-decode';
import router from '@/router';
import useDataUser from './dataUser';

const storeDataUser = useDataUser();

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const useAuthGoogleStore = defineStore('authGoogle', {
  state: () => {
    return {
      user: {} as any,
      baseURl: import.meta.env.VITE_BACK_URL,
      picture: String,
      dataUser: Object || JSON.parse(localStorage.getItem('user') ?? '{}')
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
          family_name: this.user.family_name,
          give_name: this.user.given_name,
          picture: this.user.picture,
          AccessToken: ''
        };
        const uri = `${this.baseURl}/auth/googleUser`;
        const responseUser = await fetch(uri, {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            email: this.user.email,
            familyName: this.user.family_name,
            givenName: this.user.given_name,
            imageUrl: this.user.picture,
            idToken: response.id
          })
        });
        const res = await responseUser.json();
        dataUser.AccessToken = res.token;

        storeDataUser.email = this.user.email;
        storeDataUser.family_name = this.user.family_name;
        storeDataUser.given_name = this.user.given_name;
        storeDataUser.picture = this.user.picture;
        storeDataUser.fullname =
          capitalizeFirstLetter(this.user.given_name ?? '') +
          ' ' +
          capitalizeFirstLetter(this.user.family_name ?? '');
        storeDataUser.AccessToken = res.token;

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(dataUser));

        /* const { sub, name, given_name, family_name, picture, email } = this.user; */
        await router.push({ name: 'home' });
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
          const uri = `${this.baseURl}/auth/logout`;
           const rawResponse = await fetch(uri, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${storeDataUser.AccessToken}`
            },
            body: JSON.stringify({
              access_token: storeDataUser.AccessToken
            })
          });
        const res = await rawResponse.json();
        localStorage.removeItem('user');
        try{
          await GoogleAuth.signOut();
        }catch (e){
          console.log(e);
        }
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  }
});

export default useAuthGoogleStore;
