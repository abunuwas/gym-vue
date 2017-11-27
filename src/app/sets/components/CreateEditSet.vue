<template>
  <div class="sets-create-edit-view">
    You can create and edit sets with me!

    <router-link :to="{ name: 'setsListView' }">View all sets</router-link>

    <form class="form" @submit.prevent="processSave">
      <label for="date" class="label">Date</label>
      <p class="control">
        <input type="text" class="input" name="name" v-model="selectedSet.date">
      </p>
      <label for="category" class="label">Exercise</label>
      <p class="control">
        <span class="select">
          <select name="category" v-model="selectedSet.category">
            <option v-for="value, key in categories" :value="key">{{ value }}</option>
          </select>
        </span>
      </p>
      <label for="repetitions" class="label">Reps</label>
      <p class="control">
        <input type="text" class="input" name="balance" v-model="selectedSet.repetitions">
      </p>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <router-link :to="{ name: 'setsListView' }">
            <button class="button is-link">Cancel</button>
          </router-link>
        </p>
      </div>
    </form>
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
          this.selectedSet = selectedSet
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
        'getSetById`'
      ])
    }
  }
</script>

<style scoped lang='scss'>
  #sets-create-edit-view {

}
</style>
