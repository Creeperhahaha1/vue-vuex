<template>
  <select id="bar" v-model="selectedItemId">
    <option v-for="(item,index) in building" :key="index">
      {{ item.id }}</option>
  </select>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex'
export default {
  setup() {
    const selectedItemId = ref('');
    const store = useStore();
    const building = computed(() => {
      return store.state.building
    })
    const selectedItem = computed(() => {
      return building.value.find(item => item.id 
      === selectedItemId.value);
    })
    const change = watchEffect(() => {
      store.commit('setSelectedItem', selectedItem.value);
    })
    return {
      building,
      selectedItemId,
      selectedItem,
      change
    }
  }
}
</script>