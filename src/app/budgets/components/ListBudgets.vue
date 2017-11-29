<template>
  <div id="budgets-list">
    I'm a list of budgets!

    <router-link :to="{ name: 'createBudget' }">Add a budget</router-link>
    <router-link :to="{ name: 'setsListView' }">View sets</router-link>

    <ul>
      <li v-for="budget, key in budgets">
        {{ budget.month }}
        ${{ budget.budgeted }}
        ${{ budget.spent }}
        ${{ budget.income }}
        <router-link :to="{ name: 'updateBudget', params: { budgetId: budget.id } }">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'budget-lists',

    mounted () {
      this.loadBudgets()
    },

    methods: {
      ...mapActions([
        'loadBudgets'
      ])
    },

    computed: {
      ...mapState({
        'budgets': state => state.budgets.budgets
      })
    }
  }
</script>

<style scoped lang="scss">
  #budgets-list-view {

  }
</style>
