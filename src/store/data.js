import {createStore} from 'vuex'


export default createStore({
  state:{ 
    num:0
  },
  mutations:{ //透過函式控制state
    increase(state){
      state.num++;
    }
  }, 
})

