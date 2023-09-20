import { defineStore } from 'pinia';
import router from '@/router';
import { toast, type ToastOptions } from 'vue3-toastify';
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
    async register(name: string, email: string, phone: string, password: string) {
      const uri = `${this.baseURl}/auth/register`;
      const rawResponse = await fetch(uri, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone_number: phone,
          password: password
        })
      });
      const response: any = await rawResponse.json();
        if (!response.status) {
          for (const err in response.errors) {
            toast.error(response.errors[err]);
          }
        this.errors = response.errors;
        return false;
        //ERROR
      } else {
        this.success = response.message;
        toast.success(
          `${response.message}
Revise su correo, para verificar su email, puede estar en la sección de spam`,{
            autoClose: false,
            type: toast.TYPE.INFO,
            onClose: () => router.push({ name: 'home'})
          } as ToastOptions )
          
        
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
      if (response.status === false) {
          toast.error(response.message);
          console.log(response.message);
      } else {
        const data = response.data;
        const dataUser = {
          email: data.email,
          family_name: data.familyName,
          give_name: data.givenName,
          picture: data.imageUrl,
          AccessToken: response.access_token
        };

        storeDataUser.email = data.email;
        storeDataUser.family_name = data.familyName;
        storeDataUser.given_name = data.givenName;
        storeDataUser.picture = data.imageUrl;
        storeDataUser.fullname =
          capitalizeFirstLetter(storeDataUser.given_name ?? '') +
          ' ' +
          capitalizeFirstLetter(storeDataUser.family_name ?? '');
        storeDataUser.AccessToken = response.access_token;

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(dataUser));


        this.jwt = response.access_token;
        this.success = response.message;

        toast.success(response.message);

        setTimeout(() => {
          router.push({ name: 'home' });
        }, 3000);
      }
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
    }
  }
});

export default useAuthStore;
