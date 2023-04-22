<template>
  <div>
    <p>Count: {{ getCount }}</p>
    <BtnAdd/>
  </div>
</template>

<script>
import {computed} from 'vue'
import { useStore } from 'vuex';
import BtnAdd from './components/BtnAdd.vue'

export default {
  components: {
      BtnAdd 
    },
  setup(){
    const store = useStore();
    const getCount = computed(()=>{
      return store.state.num
    })

    return{
      getCount
    }
  }
}
</script>
