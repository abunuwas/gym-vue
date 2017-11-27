import Vue from 'vue'
import { guid } from '../../../utils'

export default {
  ADD_SET (state, payload) {
    let id = guid()
    state.sets[id] = Object.assign({ id: id }, payload.set)
  },

  UPDATE_SET (state, payload) {
    state.sets[payload.set.id] = payload.set
  },

  DELETE_SET (state, payload) {
    Vue.delete(state.sets, payload.set.id)
  }
}
