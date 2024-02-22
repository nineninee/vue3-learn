import { defineStore } from "pinia";
import { reactive } from "vue";



export const  useLoveStore = defineStore("love",() => {
  // state
  const loves = reactive(JSON.parse(localStorage.getItem('loves')) || ['❤'])

  // actions
  async function addLove(value: string) {
    loves.push(value)
  }

  return {
    loves,
    addLove
  }
})