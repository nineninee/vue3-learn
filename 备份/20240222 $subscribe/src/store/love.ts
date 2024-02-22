import { defineStore } from "pinia";

export const  useLoveStore = defineStore("love", {
  state: () => ({
    loves: JSON.parse(localStorage.getItem('loves')) || ['❤']
  }),
})