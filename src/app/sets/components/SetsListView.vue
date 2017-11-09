<template>
  <div id="sets-list-view">
    I'm a list of sets!

    <router-link :to="{ name: 'createEditSet' }">Add a new set</router-link>

    <ul>
      <li v-for="set, key in sets">
        {{ account.name }}
        <span class="tag is-small is-info">{{ categories[account.category] }}</span>
        ${{ account.balance }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { CATEGORIES } from '../../../consts'

  export default {
    name: 'sets-list-view',

    data () {
      return {
        categories: CATEGORIES
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
