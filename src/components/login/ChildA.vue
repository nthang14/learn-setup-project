<template>
  <div>
    <div>Child A</div>
    <ChildB />
  </div>
</template>

<script>
import ChildB from './ChildB.vue'
export default {
  components: {
    ChildB
  }
}
</script>

<style>

</style>