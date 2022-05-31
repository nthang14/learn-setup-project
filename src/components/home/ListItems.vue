<template>
  <div>
    list items
    <ContentItem :items="data">

      <template scope="props">
        <h5>{{props.items}}</h5>
      </template>
      <!-- <template slot="test">r3333</template> -->
    </ContentItem>
  </div>
</template>

<script>
import ContentItem from '@/components/home/ContentItem'
export default {
  components: {
    ContentItem
  },
  data() {
    return { 
      data: [
        'one', 'two', 'three', 'four', 'five', 'six'
      ]
    }
  } 
}
</script>

<style>

</style>