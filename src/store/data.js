import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(
        'https://randomuser.me/api/')
      commit('setUsers', response.data.results)
    }
  }
})