<template>
    <tab>
        <tab-item :selected="demo1 === 'undo'" @click="demo1 = 'undo'">Undo</tab-item>
        <tab-item :selected="demo1 === 'doing'" @click="demo1 = 'doing'">Doing</tab-item>
        <tab-item :selected="demo1 === 'done'" @click="demo1 = 'done'">Done</tab-item>
</tab>
</template>

<script>
import {Tab, TabItem} from 'vux/src/components/tab'
export default {
  components: {Tab, TabItem},
  data () {
      return {
          demo1: 'doing'
      }
  }
}
</script>

<style>
</style>
