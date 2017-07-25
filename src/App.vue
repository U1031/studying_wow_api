<template>
  <div id="app">
    <div v-if="w_state === 'login'">
      <login v-on:changed='event1'></login>
    </div>
    <div v-if="w_state === 'logon'">
      <wmenu v-bind:u_data_menu='u_data'></wmenu>
    </div>
  </div>
</template>

<script>
import Login from './components/Login'
import Wmenu from './components/Wmenu'

export default {
  name: 'app',
  data() {
    return {
        u_realm: '',
        u_name: '',
        w_state: 'login',
        u_data: []
    }
  },
  methods: {
    event1: function (key) {
      this.u_data = key
      this.w_state = 'logon'
      // console.log(this.u_data.data.name)
    }
  },
  components: {
    Login,
    Wmenu
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  border: 0.5px solid black;
  width: 270px;
  height: 480px;
}
</style>
