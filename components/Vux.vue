<template>
  <div class="app">
    <app-navi></app-navi>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavi from './AppNavi.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    AppNavi,
    AppFooter
  }
}
</script>
