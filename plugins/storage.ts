import { Plugin } from '@nuxt/types'
import { ShoppingList } from '~/types/shopping-list';

declare module 'vue/types/vue' {
  // this.$getAllShoppingList inside Vue components
  interface Vue {
    $getAllShoppingList(): ShoppingList[]
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$getAllShoppingList inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $getAllShoppingList(): ShoppingList[]
  }
  // nuxtContext.$getAllShoppingList
  interface Context {
    $getAllShoppingList(): ShoppingList[]
  }
}

declare module 'vuex/types/index' {
  // this.$getAllShoppingList inside Vuex stores
  interface Store<S> {
    $getAllShoppingList(): ShoppingList[]
  }
}

const myPlugin: Plugin = (_, inject) => {
  inject('getAllShoppingList', () => {
    if (!process.browser) return [];
    const shoppingLists = JSON.parse(localStorage.getItem('shopping-lists') || '[]');
    return shoppingLists;
  })
}

export default myPlugin
