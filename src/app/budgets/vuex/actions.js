import moment from 'moment'

import { guid } from '../../../utils'
import { saveBudget, fetchBudgets, removeBudget } from '../api'

const verifyUniqueMonth = (budgets, budget) => {
  /*
  Accepts a list of budgets, and the budget being updated.
  Returns true if there is no date collision and false
  if a budget already exists in budgets with the same month
  as budget.
   */
  let month = moment(budget.month)
  return !Object.values(budgets).find((o) => {
    return month.isSame(o.month, 'month')
  })
}

export const createBudget = ({ commit, state }, data) => {
  let unique = verifyUniqueMonth(state.budgets, data)

  if (!unique) {
    return Promise.reject(new Error('A budget already exists for this month!'))
  }

  let id = guid()
  let budget = Object.assign({ id: id }, data)

  commit('CREATE_BUDGET', { budget: budget })
  saveBudget(budget).then((value) => {
    // budget saved; what next?
  })
}

export const updateBudget = ({ commit }, data) => {
  commit('UPDATE_BUDGET', { budget: data })
  saveBudget(data)
}

export const loadBudgets = (state) => {
  if (!state.budgets || Object.keys(state.budgets).length === 0) {
    return fetchBudgets().then((res) => {
      state.commit('LOAD_BUDGETS', res)
    })
  }
}

export const deleteBudget = ({ commit }, data) => {
  commit('DELETE_BUDGET', { budget: data })
  removeBudget(data)
}
