<template>
  <div id="budget-create-edit-view">
    You can create and edit budgets with me, woo!

    <form class="form" @submit.prevent="processSave">
      <label for="month" class="label">Month</label>
      <p class="control">
        <datepicker name="month" input-class="input" format="MMM yy" v-model="selectedBudget.month"></datepicker>
      </p>
      <label for="budgeted" class="label">Budgeted amount</label>
      <p class="control">
        <input type="text" class="input" name="budgeted" v-model="selectedBudget.budgeted">
      </p>
      <p class="control">
        Budgeted: ${{ selectedBudget.budget }}
      </p>
      <p class="control">
        Spent: ${{ selectedBudget.spent }}
      </p>
      <p class="control">
        Income: ${{ selectedBudget.income }}
      </p>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
      </div>
    </form>
    <table>
      <thead>
      <tr>
        <th>Category</th>
        <th>Budgeted</th>
        <th>Spent</th>
        <th>Remaining</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bc in selectedBudget.budgetCategories">
        <td>{{ getCategoryById(bc.category).name }}</td>
        <td>${{ bc.budgeted }}</td>
        <td>${{ bc.spent }}</td>
        <td>${{ bc.budgeted - bc.spent }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td>${{ selectedBudget.budgeted }}</td>
        <td>${{ selectedBudget.spent }}</td>
        <td>${{ selectedBudget.budgeted - selectedBudget.spent }}</td>
      </tr>
      </tfoot>
    </table>
    <create-update-budget-category></create-update-budget-category>
    <CreateUpdateBudgetCategory v-on:add-budget-category="addBudgetCategory"></CreateUpdateBudgetCategory>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Datepicker from 'vuejs-datepicker'

  import CreateUpdateBudgetCategory from './CreateUpdateBudgetCategory'

  export default {
    name: 'budget-create-edit-view',

    components: {
      Datepicker,
      CreateUpdateBudgetCategory
    },

    data: () => {
      return {
        selectedBudget: {}
      }
    },

    mounted () {
      if ('budgetId' in this.$route.params) {
        this.loadBudgets().then(() => {
          let selectedBudget = this.getBudgetById(this.$route.params.budgetId)
          if (selectedBudget) {
            this.selectedBudget = Object.assign({}, selectedBudget)
          }
        })
      }
    },

    methods: {
      ...mapActions([
        'createBudget',
        'updateBudget',
        'loadBudgets',
        'createBudgetCategory'
      ]),

      resetAndGo () {
        this.selectedBudget = {}
        // todo: redirect here
      },

      saveNewBudget () {
        this.createBudget(this.selectedBudget).then(() => {
          this.resetAndGo()
        }).catch((err) => {
          alert(err)
        })
      },

      saveBudget () {
        this.updateBudget(this.selectedBudget).then(() => {
          this.resetAndGo()
        })
      },

      processSave () {
        this.$route.params.budgetId ? this.saveBudget() : this.saveNewBudget()
      },

      addBudgetCategory (budgetCategory) {
        if (!budgetCategory.category) return

        this.createBudgetCategory({
          budget: this.selectedBudget,
          budgetCategory: {
            category: budgetCategory.category.id,
            budgeted: budgetCategory.budgeted,
            spent: 0
          }
        }).then(() => {
          this.selectedBudget = this.getBudgetById(this.$route.params.budgetId)
        })
      }
    },

    computed: {
      ...mapGetters([
        'getBudgetById',
        'getCategoryById'
      ])
    }
  }
</script>
