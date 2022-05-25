<template>
  <div class="home">
    Home
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      user: []
    }
  },
  async created() {
    await this.getStudent()
  },
   methods: {
    ...mapActions('student', ['getStudent']),
  }
};
</script>
