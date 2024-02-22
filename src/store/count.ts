import { defineStore } from "pinia";

export const  useCountStore = defineStore("count", {
  actions: {
    increatments() {
      if(this.sum >= 10) return
      this.sum++
    }
  },
  state: () => ({
    sum: 6
  })
})