export const addSet = ({ commit }, data) => {
  commit('ADD_SET', { set: data })
}

export const updateSet = ({ commit }, data) => {
  commit('UPDATE_SET', { set: data })
}

export const deleteSet = ({ commit }, data) => {
  commit('DELETE_SET', { set: data })
}
