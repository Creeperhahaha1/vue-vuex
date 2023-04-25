<template>
  <div> <!--印出名字-->
    <p v-for="user in users" :key="user.login.uuid">
      {{ user.name.first }} {{ user.name.last }}
    </p>
  </div>
</template>

<script>
import { watchEffect, onMounted ,ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const users = ref([])

    watchEffect(() => { //監聽store裡的資料變化
      const newUsers = store.state.users
      if (newUsers.length) { //有資料就傳給 響應變量users
        users.value = newUsers
      }
    })

    onMounted( () => { //觸發action
      store.dispatch('fetchUsers')
    }) 

    return { users }
  }
}
</script>
