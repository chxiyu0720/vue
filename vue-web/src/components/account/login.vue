<template>
  <div class="login-style">
    <login-header></login-header>

    <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <keep-alive>
        <component :is="loginType" class="router-class">
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
//        console.log(this);
      },
      watch: {
//          loginType: function (n, o) {
//            if(n == 'password-login'){
//                this.transitionName= 'left';
//            }else {
//                this.transitionName= 'right';
//            }
//          }
      }
  }
</script>

<style scoped>
  .login-style{
    height: 100%;
    background: #E5E9F2;
  }
</style>
