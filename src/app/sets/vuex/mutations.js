import Vue from 'vue'

export default {
  ADD_SET (state, payload) {
    state.sets[payload.set.id] = payload.set
  },

  UPDATE_SET (state, payload) {
    state.sets[payload.set.id] = payload.set
  },

  DELETE_SET (state, payload) {
    Vue.delete(state.sets, payload.set.id)
  }
}
