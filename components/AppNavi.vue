<template>
  <div class="navi">
    <p>
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
      <a v-link="{ path: '/vux/icon' }">Icon</a>
      <a v-link="{ path: '/vux/tab' }">Tab</a>
    </p>
  </div>
</template>

<script>
</script>

<style scoped>
a {color: #24b;}
</style>

