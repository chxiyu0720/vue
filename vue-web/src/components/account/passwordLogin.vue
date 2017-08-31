<template>
  <div class="password-login">
    <el-row>
      <el-col :span="24"><el-input placeholder="手机/密码/用户名" v-model="username"></el-input></el-col>
    </el-row>
    <el-row class="pb-margin-t10">
      <el-col :span="24">
        <div>
          <el-input placeholder="请输入验证码" v-model="password">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row class="pb-margin-t10">
      <el-col :span="24">
        <el-button type="success" style="width: 100%">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
      name: 'passwordLogin',
      data: function () {
          return {
              username: '',
              password: ''
          }
      }
  }
</script>
<style scoped>
  .password-login{
    margin-top: 2rem;
  }
  p.pb-padding-lr10{
    color: #324057;
  }
</style>
