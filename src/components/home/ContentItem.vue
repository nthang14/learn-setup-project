<template>
  <div>
    content items
    <div>
    </div>
    <slot name="test">1234</slot>
    <div>
      <slot :items="items"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>