import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increasecounter(state) {
      state.counter++
    },
    decreasecounter(state) {
      state.counter--
    },
  },
  actions: {},
})

export default store
