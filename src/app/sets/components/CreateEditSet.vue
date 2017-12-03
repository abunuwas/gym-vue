<template>
  <div class="sets-create-edit-view">
    <nav class="level">
      <div class="level-left">
        <h1 class="title is-2">Add a set</h1>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link
            :to="{ name: 'setsListView' }"
            class="button"
          >View all sets &#8630;</router-link>
        </div>
      </div>
    </nav>

    <div class="columns">
      <div class="column is-6">
        <form class="form" @submit.prevent="processSave">
          <label for="name" class="date">Date</label>
          <p class="control">
            <input
              type="text"
              class="input"
              name="name"
              v-model="selectedSet.date"
            >
          </p>
          <label
            for="category"
            class="category"
          >Category</label>
          <p class="control">
            <span class="select">
              <select
                name="category"
                v-model="selectedSet.category">
                <option
                  v-for="value, key in categories"
                  :value="key"
                >{{ value }}</option>
              </select>
            </span>
          </p>
          <label
            for="repetitions"
            class="label"
          >Repetitions</label>
          <p class="control has-icon" v-if="!editing">
            <input
              type="number"
              class="input"
              name="repetitions"
              step="1"
              v-model="selectedSet.repetitions"
            >
          </p>
          <p v-else>
            <span>To update the set, add a number of repetitions adjusting the performance</span>
          </p>
          <div class="control is-grouped">
            <p class="control">
              <button class="button is-success">Submit</button>
            </p>
            <p class="control">
              <router-link :to="{ name: 'setsListView' }">
                <button class="button is-linked">Cancel</button>
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { CATEGORIES } from '../../../consts'

  export default {
    name: 'sets-create-edit-view',

    data: () => {
      return {
        categories: CATEGORIES,
        selectedSet: {},
        editing: false
      }
    },

    mounted () {
      if ('setId' in this.$route.params) {
        let selectedSet = this.getSetById(this.$route.params.setId)
        if (selectedSet) {
          this.editing = true
          this.selectedSet = Object.assign({}, selectedSet)
        }
        // TODO: the object does not exist, how do we handle this scenario?
      }
    },

    methods: {
      ...mapActions([
        'addSet',
        'updateSet'
      ]),

      resetAndGo () {
        this.selectedSet = {}
        this.$router.push({ name: 'setsListView' })
      },

      saveNewSet () {
        this.addSet(this.selectedSet).then(() => {
          this.resetAndGo()
        })
      },

      saveSet () {
        this.updateSet(this.selectedSet).then(() => {
          this.resetAndGo()
        })
      },

      processSave () {
        this.editing ? this.saveSet() : this.saveNewSet()
      }
    },

    computed: {
      ...mapGetters([
        'getSetById'
      ])
    }
  }
</script>

<style scoped lang='scss'>
  #sets-create-edit-view {

}
</style>
