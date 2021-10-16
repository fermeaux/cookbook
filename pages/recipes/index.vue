<template>
  <div class="recipes mx-auto mb-16">
    <h1 class="text-center text-4xl font-bold mb-16">Liste des recettes</h1>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Recipe, RecipeContent } from "~/types/recipe";

export default Vue.extend({
  async asyncData({ $content }) {
    const recipes = (await $content(
      `recipes`
    ).fetch<Recipe>()) as RecipeContent[];

    return { recipes };
  },
});
</script>

<style scoped>
.recipes {
  max-width: min(90%, 100% - 4em);
}
</style>
