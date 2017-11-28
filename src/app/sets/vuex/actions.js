import { guid } from '../../../utils'
import { fetchSets, removeSet, saveSet } from '../api'

export const addSet = ({ commit }, data) => {
  let id = guid()
  let set = Object.assign({ id: id }, data)
  commit('ADD_SET', { set: set })
  saveSet(set).then((value) => {
    // set saved
  })
}

export const updateSet = ({ commit }, data) => {
  commit('UPDATE_SET', { set: data })
}

export const deleteSet = ({ commit }, data) => {
  commit('DELETE_SET', { set: data })
  removeSet(data)
}

export const loadSets = (state) => {
  // loads sets only if they are not already loaded
  // later we might want to be able to force reload them
  if (!state.sets || Object.keys(state.sets).length === 0) {
    return fetchSets().then((res) => {
      let sets = {}
      Object.keys(res).forEach((key) => {
        sets[res[key].id] = res[key]
        state.commit('LOAD_SETS', sets)
      })
    })
  }
}
