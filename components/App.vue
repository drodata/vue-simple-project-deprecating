<template>
  <div class="app">
    <component-a></component-a>
    <app-footer></app-footer>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    ComponentA,
    AppFooter
  }
}
</script>
