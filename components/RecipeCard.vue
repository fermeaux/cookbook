<template>
  <NuxtLink :to="`/recipes/${recipe.slug}`">
    <article
      class="
        h-full
        flex flex-col
        shadow-xl
        hover:shadow-2xl
        transition
        duration-500
        ease-in-out
      "
    >
      <div class="h-48 w-full">
        <img
          :src="`/recipes/previews/${recipe.slug}.jpg`"
          :alt="`${recipe.name} preview`"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="py-4 h-full flex flex-col justify-between">
        <div>
          <div class="px-8 flex items-center justify-between mb-4">
            <label class="cursor-pointer font-medium text-xl">{{
              recipe.name
            }}</label>
            <span class="font-medium flex items-center text-lg">
              <fa-icon icon="clock" class="text-2xl mr-2" />
              {{ recipe.times.ready }}
            </span>
          </div>
          <p class="px-8 mb-4 font-light text-gray-500">
            {{ recipe.description }}
          </p>
        </div>
        <div class="flex overflow-x-scroll tags">
          <span
            v-for="(tag, index) in recipe.tags"
            :key="tag"
            :class="`
              px-2
              rounded-full
              font-medium
              whitespace-nowrap
              bg-green-500
              text-white
              ${index === 0 ? 'ml-8' : 'ml-2'}
              ${index === recipe.tags.length - 1 ? 'mr-8' : 'mr-2'}
            `"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { RecipeContent } from "~/types/recipe";

export default Vue.extend({
  props: {
    recipe: Object as PropType<RecipeContent>,
  },
});
</script>

<style scoped>
.tags::-webkit-scrollbar {
  display: none;
}
.tags {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
</style>
