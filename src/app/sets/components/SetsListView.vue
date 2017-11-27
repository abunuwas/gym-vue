<template>
  <div id="sets-list-view">
    I'm a list of sets!

    <router-link :to="{ name: 'createEditSet' }">Add a new set</router-link>

    <ul>
      <li v-for="set, key in sets">
        {{ set.date }}
        <span class="tag is-small is-info">{{ categories[set.category] }}</span>
        {{ set.repetitions }}
        <a @click="confirmDeleteSet(set)">Delete</a>
        <router-link :to="{ name: 'editSet', params: { setId: set.id } }"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { CATEGORIES } from '../../../consts'

  export default {
    name: 'sets-list-view',

    data () {
      return {
        categories: CATEGORIES
      }
    },

    methods: {
      // this imports our vuex actions and maps them to methods on this component
      ...mapActions([
        'deleteSet'
      ]),

      confirmDeleteSet (set) {
        if (confirm(`Are you sure you want to delete ${set.date}?`)) {
          this.deleteSet(set)
        }
      }
    },

    computed: {
      ...mapState({
        'sets': state => state.sets.sets
      })
    }
  }
</script>

<style scoped lang="scss">
  #sets-list-view {

  }
</style>
