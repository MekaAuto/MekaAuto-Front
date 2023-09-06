import { defineStore } from 'pinia';
import router from '@/router';
import { toast } from 'vue3-toastify';
import useDataUser from './dataUser';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      jwt: null as string | null,
      errors: {} as any | string,
      success: '',
      baseURl: import.meta.env.VITE_BACK_URL,
      name: ''
    };
  },
  getters: {},
  actions: {
    async register(name: string, email: string, password: string) {
      const uri = `${this.baseURl}/auth/register`;
      const rawResponse = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });
      const response: any = await rawResponse.json();
      if (!response.status) {
        /**
         * this.errors.email = response.errors.email[0] | "";
         * this.errors.name = response.errors.name[0] | "";
         * this.errors.password = response.errors.password[0] | "";
         * */
        this.errors = response.errors;
        for ( const error in this.errors ) {
          toast.success(this.errors[error])
        }
        return false;
        //ERROR
      } else {
        this.jwt = response.token;
        this.success = response.message;
        return true;
        // SUCCESS
      }
    },
    async login(email: string, password: string) {
      const storeDataUser = useDataUser();
      const uri = `${this.baseURl}/auth/login`;
      const rawResponse = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const response = await rawResponse.json();

      console.log(response.AccessToken);
      if (response.status === false) {
        for( const err in response.errors ) {
          toast.error( response.errors[err] );
          console.log( response.errors[err] );
        }
      } else {

        const dataUser = {
          email: response.email,
          family_name: response.familyName,
          give_name: response.givenName,
          picture: response.imageUrl,
          AccessToken: response.AccessToken
        }

        storeDataUser.email = response.email;
        storeDataUser.family_name = response.familyName;
        storeDataUser.given_name = response.givenName;
        storeDataUser.picture = response.imageUrl;
        storeDataUser.fullname =
        capitalizeFirstLetter(storeDataUser.given_name ?? '') +
        ' ' +
        capitalizeFirstLetter(storeDataUser.family_name ?? '');
        storeDataUser.AccessToken = response.AccessToken

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(dataUser));

        this.jwt = response.AccessToken;
        this.success = response.message;
        
        toast.success( response.message);

        setTimeout(() => {
          router.push({ name: 'home' })
        },3000)
      }
      console.log(this.jwt)
    },
    async getNotes() {
      const uri = `${this.baseURl}/note`;
      const rawResponse = await fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.jwt}`
        }
      });
      const response = await rawResponse.json();
      console.log(response);
      return response;
    },
    async createNotes(content: string): Promise<any> {
      const uri = `${this.baseURl}/note`;
      const rawResponse = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.jwt}`
        },
        body: JSON.stringify({
          content: content
        })
      });
      const response = await rawResponse.json();
      if (response.status === true) {
        return false;
      } else {
        return true;
      }
    },
    logout() {
      this.jwt = null ;
    }
  }

});

export default useAuthStore;
