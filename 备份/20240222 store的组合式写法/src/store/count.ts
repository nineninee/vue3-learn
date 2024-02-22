import { defineStore } from "pinia";

export const  useCountStore = defineStore("count", {
  actions: {
    increatments() {
      if(this.sum >= 100) return
      this.sum++
    }
  },
  state: () => ({
    sum: 6,
    student: 'lilei',
    id: '1'
  }),
  getters: {
    bigSum: state=>state.sum * 10,
    upperStudent(){
      return this.student.toUpperCase()
    }
  }
})