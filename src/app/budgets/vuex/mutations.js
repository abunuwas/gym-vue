export default {
  CREATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  UPDATE_BUDTET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  LOAD_BUDGETS (state, payload) {
    state.budgets = payload
  }
}
