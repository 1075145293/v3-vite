import { createStore } from 'vuex'
export default createStore({
  state: {
    name: '张三'
  },
  getters: {
    name: (state) => state.name
  }
})
