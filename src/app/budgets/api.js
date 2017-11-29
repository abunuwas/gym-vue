import localforage from 'localforage'
import { processAPIData } from '../../utils'

const BUDGET_NAMESPACE = 'BUDGET-'

export const saveBudget = (budget) => {
  return localforage.setItem(
    BUDGET_NAMESPACE + budget.id,
    budget
  ).then((value) => {
    return value
  }).catch((err) => {
    console.log('could not save the budget ', err)
  })
}

export const fetchBudgets = () => {
  return localforage.startswith(BUDGET_NAMESPACE).then((res) => {
    return processAPIData(res)
  })
}
