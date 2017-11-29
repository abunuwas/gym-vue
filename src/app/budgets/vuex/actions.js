import { guid } from '../../../utils'
import { saveBudget } from '../api'

export const createBudget = ({ commit }, data) => {
  let id = guid()
  let budget = Object.assign({ id: id }, data)

  commit('CREATE_BUDGET', { budget: budget })
  saveBudget(budget).then((value) => {
    // budget saved; what next?
  })
}
