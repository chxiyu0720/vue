<template>
    <div class="phone-login">
      <el-row>
        <el-col :span="16"><el-input placeholder="请输入手机号" v-model="phoneCode"></el-input></el-col>
        <el-col :span="8"><el-button class="pb-float-right" type="primary">发送验证码</el-button></el-col>
      </el-row>
      <el-row class="pb-margin-t10">
        <el-col :span="24">
          <div>
            <el-input placeholder="请输入验证码" v-model="phoneCode">
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <p class="pb-padding-lr10">温习提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<router-link to="">《用户服务协议》</router-link></p>
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
  export default{
      name: 'phoneLogin',
      data: function () {
          return {
            phoneCode: ''
          }
      },
      methods: {
          getPhoneCode: function () {
              alert("发送验证码")
          },
          afterLeave: function (el) {
          },
          beforeEnter: function (el) {
          }
      },
  }
</script>

<style scoped>
  .phone-login{
    margin-top: 2rem;
  }
  p.pb-padding-lr10{
    color: #324057;
  }
</style>
