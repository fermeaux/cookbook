<template>
  <div>
    <h1>Listes de course</h1>
    <div>
      <ShoppingListCard
        v-for="shoppingList in shoppingLists"
        :key="shoppingList.id"
        :shoppingList="shoppingList"
      />
    </div>
    <div class="absolute right-8 bottom-8">
      <AddButton link="/shopping-lists/new" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ShoppingList } from "~/types/shopping-list";

export default Vue.extend({
  data() {
    return {
      shoppingLists: [] as ShoppingList[],
    };
  },
  mounted() {
    this.shoppingLists = this.$getAllShoppingList();
  },
});
</script>
