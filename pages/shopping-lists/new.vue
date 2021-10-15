<template>
  <div>
    <h1>Nouvelle liste de course</h1>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData (param) {
    const recipes = await param.$content('recipes').fetch()
    console.log('param', param)
    console.log('recipes', recipes)

    return {
      recipes
    }
  }
})
</script>
