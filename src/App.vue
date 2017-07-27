<template>
  <div id="app">
    <!--<div v-if="w_state === 'login'">
        <login v-on:changed_login='main_login_function'></login>
      </div>
      <div v-if="w_state === 'logon'">
        <wmenu v-bind:u_data_menu='u_data' v-on:changed_logout='main_logout_function'></wmenu>
      </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
import Wmenu from './components/Wmenu'

export default {
  name: 'app',
  data() {
    return {
      // u_realm: '',
      // u_name: '',
      // w_state: 'login',
      // u_data: []
    }
  },
  methods: {
    // main_login_function: function (key) {
    //   this.u_data = key
    //   this.w_state = 'logon'
    // },
    // main_logout_function: function (key) {
    //   this.w_state = 'login'
    //   this.u_data = []
    // }
  },
  components: {
    // Login,
    // Wmenu
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  border: 0.5px solid black;
  width: 270px;
  height: 480px;
  text-align: center;
  position: relative;
}

</style>
