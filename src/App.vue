<template>
  <div id="app">
    <login></login>
    <wmenu></wmenu>
  </div>
</template>

<script>
import Login from './components/Login'
import Wmenu from './components/Wmenu'

export default {
  name: 'app',
  data() {
    return {
      user:{
        u_realm: '',
        u_name : ''
      }
    }
  },
  methods: {

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
