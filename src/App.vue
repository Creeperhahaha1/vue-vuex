<template>
  <div>
    {{ msg1 }}<br/>
    {{ msg2 }}
  </div>
</template>

<script>
import { inject } from 'vue' 

export default {
  setup() {
    const s1 = inject('s1') 
    const s2 = inject('s2') 
    const msg1 = s1.state.message 
    const msg2 = s2.state.message

    return {
      msg1,msg2
    }
  }
}
</script>
