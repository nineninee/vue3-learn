<template>
  <div class="person">
    <!-- <h1>props: {{ a }}</h1> -->
    {{ list }}

    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }}---{{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {type PersonInter, type Persons} from '@/type'
import {defineProps, withDefaults } from 'vue';

// 接收a
// defineProps(['a'])

// 接收a， 同时将a的值保存起来
// let x = defineProps(['a'])
// console.log(x);

// 接收list、限制类型、限制必要性、指定默认值
withDefaults(defineProps<{list:Persons}>(),
{
  list: () => ([{name: '张三', age: 18, id: '0000'}])
})

</script>

<style scoped lang="scss"></style>
