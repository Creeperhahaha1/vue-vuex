<template>
  <div>
    <p>Module A msg: {{ mA }}</p>
    <p>Module B msg: {{ mB }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const mA = ref(store.state.moduleA.message)
    const mB = ref(store.state.moduleB.message)

    return {
      mA,mB
    }
  }
}
</script>
