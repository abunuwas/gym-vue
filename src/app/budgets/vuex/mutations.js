export default {
  CREATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  }
}
