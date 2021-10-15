<template>
  <nav class="flex items-center justify-between w-full px-16 py-4">
    <span class="text-4xl">🥧</span>
    <ul class="flex items-start gap-16 font-medium">
      <li v-for="item in navItems" :key="item.label">
        <NuxtLink
          :to="item.route"
          class="px-8 py-2 rounded-full hover:bg-green-200"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      navItems: [
        {
          label: "Recettes",
          route: "/recipes",
        },
        {
          label: "Listes de courses",
          route: "/shopping-lists",
        },
      ],
    };
  },
});
</script>

<style scoped>
a.nuxt-link-active {
  @apply text-white bg-green-500;
}
</style>
