<template>
  <div id="sets-list-view">
    <nav class="level-left">
      <div class="leve-left">
        <h1 class="title is-2">Sets</h1>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link
            :to="{ name: 'createEditSet' }"
            class="button is-primary"
          >
            Add a set +
          </router-link>
        </div>
      </div>
    </nav>
    <table class="table is-bordered">
      <thead>
      <tr>
        <th>Date</th>
        <th>Exercise</th>
        <th>Repetitions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="set, key in sets">
        <td class="subtitle is-5">
          <span class="tag is-5">{{ set.date }}</span>
        </td>
        <td>
          <span class="tag is-small">
            {{ categories[set.category] }}
          </span>
        </td>
        <td>
          <span class="subtitle is-5">
            {{ set.repetitions }}
          </span>
        </td>
        <td>
          <router-link
            class="button is-primary"
            :to="{ name: 'editSet', params: { setId: set.id } }"
          >
            Edit
          </router-link>
          <a class="button is-danger" @click="confirmDeleteSet(set)">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
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

    mounted () {
      this.loadSets()
    },

    methods: {
      // this imports our vuex actions and maps them to methods on this component
      ...mapActions([
        'deleteSet',
        'loadSets'
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

<style scoped lang="scss"></style>
