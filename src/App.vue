<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
  },
  components: {
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
