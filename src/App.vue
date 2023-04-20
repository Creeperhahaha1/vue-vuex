<template>
<<<<<<< HEAD
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
=======
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>>>>>>> a681177a742c74cfec4bbf108a817a544bcdb9d1
