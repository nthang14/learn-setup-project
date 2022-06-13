<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
        <BaseInput type="email" label="Email Address" v-model="payload.username" value="email">
        </BaseInput>
          
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
            <v-btn @click="handleLogin" color="primary">
              Login
            </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <ChildA />
      </v-row>
      
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
import BaseInput from '@/components/login/BaseInput'
import ChildA from '@/components/login/ChildA'
export default {
  components: {
    BaseInput,
    ChildA
  },
  provide: {
    foo: 'bar'
  },
  data() {
    return {
      email: 'test@gmail.com',
      payload: {

      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin() {
      console.log('login')
      await this.login(this.payload).then(res => {
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