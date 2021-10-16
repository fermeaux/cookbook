<template>
  <div class="recipe">
    <h1>{{ recipe.name }}</h1>
    <h2>{{ recipe.description }}</h2>
    <h3>Ingrédients</h3>
    <ul class="list-disc ml-4 mb-4">
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
        {{ ingredient.label || ingredient.id }}
      </li>
    </ul>
    <h3>Instructions</h3>
    <ul class="list-decimal ml-4 mb-4">
      <li v-for="instruction in recipe.instructions" :key="instruction.label">
        {{ instruction.label }}
      </li>
    </ul>
    <h3>Commentaires</h3>
    <ul>
      <li
        v-for="comment in recipe.comments"
        :key="comment"
        class="bg-gray-200 px-4 py-2 rounded-lg mb-4"
      >
        {{ comment }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RecipeContent } from "~/types/recipe";

export default Vue.extend({
  async asyncData({ $content, route }) {
    const recipe = (await $content(
      `recipes/${route.params.id}`
    ).fetch()) as RecipeContent;

    return { recipe };
  },
});
</script>

<style scoped>
.recipe {
  max-width: min(90%, 65ch);
  @apply mx-auto mb-8;
}
h1 {
  @apply text-4xl mb-8 font-semibold text-center;
}
h2 {
  @apply text-2xl mb-4 text-gray-500 text-center;
}
h3 {
  @apply text-xl mb-2 font-semibold;
}
li {
  @apply text-gray-600;
}
</style>
