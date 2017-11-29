import localforage from 'localforage'

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
