<template>
  <div class="sets-create-edit-view">
    You can create and edit sets with me!
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'sets-create-edit-view',

    methods: {
      ...mapActions([
        'addSet'
      ])
    }
  }
</script>

<style scoped lang='scss'>
  #sets-create-edit-view {

}
</style>
