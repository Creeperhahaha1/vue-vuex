<template>
  <div>
    <p>Count: {{ getCount }}</p>
    <BtnAdd/>
  </div>
</template>

<script>

import BtnAdd from './components/BtnAdd.vue'

export default {
  computed: { 
    getCount() { //用$store 存取data.js資料
      return this.$store.state.num
    }
  },
  components: {
    BtnAdd 
  }
}
</script>
