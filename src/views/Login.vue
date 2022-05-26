<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            label="username"
            v-model="payload.username"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            label="password"
            placeholder="password"
            v-model="payload.password"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12">
            <v-btn @click="login" color="primary">
              Login
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      payload: {

      }
    }
  },
  methods: {
    ...mapActions('auth', ['getUser']),
    async login() {
      console.log('login')
      await this.getUser(this.payload).then(res => {
        if (res) {
          this.$router.push({
            name: '/'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>