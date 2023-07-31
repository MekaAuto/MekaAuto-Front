/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      jwt: null as string | null,
      errors: {} as any | string,
      success: '',
      baseURl: 'http://127.0.0.1:8000/api',
      name: ''
    };
  },
  getters: {},
  actions: {
    async register(name: string, email: string, password: string) {
      const uri = `${this.baseURl}/create`;
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
        this.errors = response.errors;
        this.jwt = null;
        return false;
      } else {
        this.jwt = response.token;
        this.success = response.message;
        return true;
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
    },
    logout() {
      this.jwt = null ;
    }
  }

});

export default useAuthStore;
