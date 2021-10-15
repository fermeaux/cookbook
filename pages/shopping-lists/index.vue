<template>
  <div>
    <h1>Listes de course</h1>
    <div class="absolute right-8 bottom-8">
      <NuxtLink to="/shopping-lists/new">
        <div
          class="
            w-12
            h-12
            bg-green-500
            rounded-full
            flex
            items-center
            justify-center
            shadow-xl
            hover:animate-wiggle
            transition-all
            duration-500
            ease-in-out
          "
        >
          <fa-icon icon="plus" class="text-white fa-lg" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
