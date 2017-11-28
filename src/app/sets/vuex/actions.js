import { guid } from '../../../utils'
import { removeSet, saveSet } from '../api'

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
