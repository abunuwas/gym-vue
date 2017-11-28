import localforage from 'localforage'

import { guid } from '../../../utils'

const SET_NAMESPACE = 'SET-'

const saveSet = (set) => {
  return localforage.setItem(
    SET_NAMESPACE + set.id,
    set
  ).then((value) => {
    return value
  }).catch((err) => {
    console.log(
      'oops! The set was too far gone! ' + err
    )
  })
}

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
}
