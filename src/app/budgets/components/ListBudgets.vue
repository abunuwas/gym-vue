<template>
  <div id="budgets-list">
    I'm a list of budgets!

    <router-link :to="{ name: 'createBudget' }">Add a budget</router-link>
    <router-link :to="{ name: 'setsListView' }">View sets</router-link>

    <ul>
      <li v-for="budget, key in budgets">
        {{ budget.month | moment }}
        ${{ budget.budgeted }}
        ${{ budget.spent }}
        ${{ budget.income }}
        <router-link :to="{ name: 'updateBudget', params: { budgetId: budget.id } }">Edit</router-link>
        <a @click="confirmDeleteBudget(budget)">Delete</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { moment } from '../../../filters'

  export default {
    name: 'budget-lists',

    filters: {
      moment
    },

    mounted () {
      this.loadBudgets()
    },

    methods: {
      ...mapActions([
        'deleteBudget',
        'loadBudgets'
      ]),

      confirmDeleteBudget (budget) {
        if (confirm(`Are you sure you want to delete ${budget.month}?`)) {
          this.deleteBudget(budget)
        }
      }
    },

    computed: {
      ...mapState({
        'budgets': state => state.budgets.budgets
      }),

      sortedBudgets () {
        let sortedKeys = Object.keys(this.budgets).sort((a, b) => {
          return this.budgets[b].month - this.budgets[a].month
        })

        return sortedKeys.map((key) => {
          return this.budgets[key]
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #budgets-list-view {

  }
</style>
