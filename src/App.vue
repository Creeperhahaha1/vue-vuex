<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { useStore } from 'vuex' //預設儲存庫

export default {
  setup() {
    //引用預設儲存庫 "import store from './store/test.js'"
    const s = useStore() 
    const msg = s.state.message //把儲存庫資料傳給變數

    return {
      msg
    }
  }
}
</script>