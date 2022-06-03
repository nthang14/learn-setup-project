<template>
  <div>
    <div>
      <div> {{ label }}</div>
       <v-text-field
            placeholder="email"
            :value="value"
            @input="$emit('input', $event)"
          ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'value', 'type'],
  methods: {
    
  }
}
</script>

<style>

</style>