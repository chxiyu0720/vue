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

  export default {
      name: 'login',
      data: function () {
          return {
            loginType: 'phone-login'
          };
      },
      components: {
        loginHeader,
        phoneLogin
      }
  }
</script>

<style scoped>
  .login-style{
    height: 100%;
    background: #E5E9F2;
  }
</style>
