<template>
  <div class="header">
    <el-row>
      <el-col :span="6"><div @click="$router.go(-1)" class="btn_back el-icon-arrow-left"></div></el-col>
      <el-col :span="12"><div class="title">登录</div></el-col>
      <el-col :span="6">
        <div v-show="type == 'phone-login'" @click="changeLoginType" class="header">手机登陆</div>
        <div v-show="type == 'password-login'" @click="changeLoginType" class="header">密码登陆</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default{
      name: 'loginHeader',
      data: function () {
          return {};
      },
      computed: {
          type: function(){
            return this.$store.state.login.loginType
          }
      },
      methods: {
        ...mapActions([
            'changeLoginType'
        ])
      }
  }
</script>

<style scoped>
  .header{
    background: #20A0FF;
    height: 60px;
    line-height: 60px;
    font-size: 1.6rem;
    color: #fff;
  }

  .btn_back{
    padding: 10px 15px;
  }

  .title{
    text-align: center;
  }
</style>
