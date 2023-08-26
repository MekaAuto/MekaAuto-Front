import { defineStore } from "pinia";

interface State {
  email: string | undefined,
  family_name: string,
  given_name: string,
  picture: string,
  fullname: string
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const user = JSON.parse(localStorage.getItem('user') ?? '{}' );

const useDataUser = defineStore('data',{
  state: (): State => {
    return {
      email: user.email ,
      family_name: user.family_name,
      given_name: user.give_name,
      picture: user.picture,
      fullname:  capitalizeFirstLetter(user.give_name ?? '') + ' ' + capitalizeFirstLetter(user.family_name  ?? '')
    }
  }
})

export default useDataUser;