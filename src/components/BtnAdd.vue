<template>
  <button @click="add">Add</button>
</template>

<script>
export default {
  methods: {
    add() { //連接儲存庫的對應函式 add -> increase
      this.$store.commit('increase')
    }
  }
}
</script>