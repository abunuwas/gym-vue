export default {
  getSetById: (state, getters) => (setId) => {
    return state.sets && setId in state.sets ? state.sets[setId] : false
  }
}
