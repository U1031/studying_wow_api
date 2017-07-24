<template>
  <div class="login">
    <h1>Login Page</h1>
    realm : <input v-model="realm"><br>
    name : <input v-model="name"><br>
    <button>login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      realm : '',
      name : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login {
  margin: 10px;
}


</style>
