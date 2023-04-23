import {createStore} from 'vuex'

export default createStore({
  state:{ 
    building:[
      {id:'owo',price:1000,size:25},
      {id:'ouo',price:1240,size:33},
      {id:'ovo',price:1740,size:40},
      {id:'oao',price:2000,size:48},
      {id:'oyo',price:7500,size:120},
      {id:'ozo',price:400,size:9}],
    selectedItem:[] //儲存selectBar選擇的物件
  },
  mutations:{
    setSelectedItem(state,selectedItem){
      state.selectedItem = selectedItem;
    } //接收selectBar選擇的物件
  },
  getters:{
    TotalPrice: ((state)=>{
      return state.building.reduce((acc,cv)=>{
        return acc+cv.price;
      },0)
    }),
    TotalSize: ((state)=>{
      return state.building.reduce((acc,cv)=>{
        return acc+cv.size;
      },0)
    })
  }
})

