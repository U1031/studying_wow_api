<template>
  <div class="login">
    <h1>Login Page</h1>
    realm : <input v-model="realm"><br>
    name : <input v-model="name"><br>
    <button v-on:click='clickevent'>login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      realm: '',
      name: ''
    }
  },
  methods: {
    clickevent: function () {
      if (this.realm == '' || this.name == '') {
        window.alert('please insert all information!')
      } else {
        const baseURI = 'https://kr.api.battle.net/wow/character/';
        this.$http.get(`${baseURI}` + this.realm + `/` + this.name + `?fields=appearance&locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td`)
          .then((result) => {
            console.log(result)
          })
          .catch(function (error) {
            console.log(error)
            window.alert(error)
          })
      }
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
