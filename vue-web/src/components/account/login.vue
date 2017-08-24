<template>
  <div class="login-style">
    <login-header></login-header>

    <component :is="loginType">
      <phone-login></phone-login>
    </component>
  </div>
</template>

<script>
  import loginHeader from './header'
  import phoneLogin from './phoneLogin.vue'
  import passwordLogin from './passwordLogin.vue'

  export default {
      name: 'login',
      data: function () {
          return {
//            loginType: this.$store.state.login.loginType
          };
      },
      computed: {
        loginType: function () {
          return this.$store.state.login.loginType
        }
      },
      components: {
        loginHeader,
        phoneLogin,
        passwordLogin
      },
      created: function () {
        console.log(this);
      }
  }
</script>

<style scoped>
  .login-style{
    height: 100%;
    background: #E5E9F2;
  }
</style>
