import axios from 'axios'
import { ref, reactive, computed } from 'vue';

export default function () {
  let sum = ref(0);

  function add() {
    sum.value++;
  }

  let bigSum = computed(() => {
    return sum.value * 10;
  })

  return { sum, add, bigSum}

}


