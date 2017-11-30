export default {
  getBudgetById: (state, getters) => (budgetId) => {
    return state.budgets && budgetId in state.budgets ? state.budgets[budgetId] : false
  },

  getCategoryById: (state, getters) => (categoryId) => {
    return state.categories && categoryId in state.categories ? state.categories[categoryId] : false
  }
}
