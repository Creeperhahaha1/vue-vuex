<template>
  <button @click="add">Add</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore();
    const add = (()=>{
      store.commit('increase');
    })
    return{
      add
    }
  }
}
</script>