<template>
  <div class="login">
    <div class='login_page_header'>
      <h1>Login Page</h1>
    </div>
    <div class='login_page_body'>
      realm :
      <input v-model="realm">
      <br> name :
      <input v-model="name">
      <br>
    </div>
    <div class='login_page_btn'>
      <button v-on:click='clickevent'>login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      realm: 'azshara',
      name: 'Deepj',
      user_data: []
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
            this.user_data = result.data
            this.$router.push({name: 'Wmenu', params:{u_data_menu:this.user_data}})
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
.login .login_page_header {
  position: absolute;
  width: 80%;
  height: 15%;
  margin: 10px 25px auto;
  border: 0.5px solid red;
}

.login .login_page_body {
  position: absolute;
  border: 0.5px solid red;
  margin: 0px 25px auto;
  width: 80%;
  height: 70%;
  top: 100px;
}

.login .login_page_btn {
  position: absolute;
  border: 0.5px solid red;
  width: 80%;
  margin: 10px 25px auto;
  bottom: 10px;
}
</style>