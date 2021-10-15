<template>
  <div>
    <h1>Liste de course</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content, route }) {
    const recipe = await $content(`recipes/${route.params.id}`).fetch()

    return { recipe }
  }
})
</script>
