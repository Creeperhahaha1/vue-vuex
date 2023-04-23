<template>
  <div>
    <p>Total price: {{ totalPrice }}</p>
    <p>Total size: {{ totalSize }}</p>
    <p>Selected building item:</p>
    <SelectBar/> <!--下拉式清單-->
    <div v-if="selectedItemId"> <!--顯示選擇的元素-->
      <p>Name: {{ selectedItemId.id }}</p>
      <p>Price: {{ selectedItemId.price }}</p>
      <p>Size: {{ selectedItemId.size }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SelectBar from './components/selectBar.vue';

export default {
  components:{
    SelectBar,
  },
  setup() {
    const store = useStore();
    //getter計算後傳回新的數據
    const totalPrice = computed(() => store.getters.TotalPrice);
    const totalSize = computed(() => store.getters.TotalSize);
    //傳遞選擇的物件id屬性 ?表示忽略屬性為null時的 error
    const selectedItemId = computed(() => 
    store.state.selectedItem);

    return {
      totalPrice,
      totalSize,
      selectedItemId,
    };
  },
};
</script>