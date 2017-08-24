<template>
  <div class="login-style">
    <login-header></login-header>

    <transition mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
      <keep-alive>
        <component :is="loginType">
          <phone-login></phone-login>
        </component>
      </keep-alive>
    </transition>

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
