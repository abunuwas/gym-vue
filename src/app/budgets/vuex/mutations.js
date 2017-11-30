import Vue from 'vue'

export default {
  CREATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  UPDATE_BUDGET (state, payload) {
    state.budgets[payload.budget.id] = payload.budget
  },

  LOAD_BUDGETS (state, payload) {
    state.budgets = payload
  },

  DELETE_BUDGET (state, payload) {
    Vue.delete(state.budgets, payload.budget.id)
  },

  CREATE_CATEGORY (state, payload) {
    state.categories[payload.category.id] = payload.category
  },

  UPDATE_CATEGORY (state, payload) {
    state.categories[payload.category.id] = payload.category
  },

  LOAD_CATEGORIES (state, payload) {
    state.categories = payload
  }
}
