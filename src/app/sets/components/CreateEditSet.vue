<template>
  <div class="sets-create-edit-view">
    You can create and edit sets with me!

    <router-link :to="{ name: 'setsListView' }">View all sets</router-link>

    <form class="form" @submit.prevent="saveNewSet">
      <label for="date" class="label">Date</label>
      <p class="control">
        <input type="text" class="input" name="name" v-model="newSet.date">
      </p>
      <label for="category" class="label">Exercise</label>
      <p class="control">
        <span class="select">
          <select name="category" v-model="newSet.category">
            <option v-for="value, key in categories" :value="key">{{ value }}</option>
          </select>
        </span>
      </p>
      <label for="repetitions" class="label">Reps</label>
      <p class="control">
        <input type="text" class="input" name="balance" v-model="newSet.repetitions">
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
  import { mapActions } from 'vuex'
  import { CATEGORIES } from '../../../consts'

  export default {
    name: 'sets-create-edit-view',

    data: () => {
      return {
        categories: CATEGORIES,
        newSet: {}
      }
    },

    methods: {
      ...mapActions([
        'addSet'
      ]),

      saveNewSet () {
        this.addSet(this.newSet).then(() => {
          this.newSet = {}
        })
      }
    }
  }
</script>

<style scoped lang='scss'>
  #sets-create-edit-view {

}
</style>
