<template>
  <div id="budget-category-create-edit-view">
    <form class="form" @submit.prevent="processSave">
      <div class="control is-horizontal">
        <div class="control is-grouped">
          <div class="control is-expanded">
            <multiselect
              :value="budgetCategory.category"
              :taggable="true"
              @tag="handleCreateCategory"
              @input="updateCategorySelection"
              :options="getCategorySelectList"
              placeholder="Select or create a category"
              label="name"
              track-by="id"
            ></multiselect>
          </div>
          <div class="control is-expanded">
            $<input type="number" class="input" v-model="budgetCategory.budgeted">
          </div>
          <div class="control is-expanded">
            {{ budgetCategory.spent }}
          </div>
          <button @click.prevent="processSave">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    name: 'budget-category-create-edit-view',

    components: {
      Multiselect
    },

    data: () => {
      return {
        budgetCategory: {}
      }
    },

    mounted () {
    },

    methods: {
      ...mapActions([
      ]),

      processSave () {
        this.$emit('add-budget-category', this.budgetCategory)
        this.budgetCategory = {}
      }
    },

    computed: {
      ...mapGetters([
      ])
    }
  }
</script>
