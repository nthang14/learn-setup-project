<template>
  <div class="home">
    Home
  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/services/api';

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      user: []
    }
  },
  async mounted() {
    api().post('/auth/login', {password: '123123', username: 'admin'}).then((response) => {
      console.log('response', response)
    })
  }
};
</script>
