import { createStore } from 'vuex'

const moduleA = {
  state:{
    message: 'I am module A'
  }
}

const moduleB = {
  state:{
    message: 'I am module B'
  }
}

const store = createStore({
  modules: {
    moduleA,
    moduleB
  }
})

export default store