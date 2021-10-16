<template>
  <NuxtLink :to="`/shopping-list/${shoppingList.id}`">
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
      <h1>{{ shoppingList.name }}</h1>
    </article>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ShoppingList } from "~/types/shopping-list";

export default Vue.extend({
  props: {
    shoppingList: Object as PropType<ShoppingList>,
  },
});
</script>
