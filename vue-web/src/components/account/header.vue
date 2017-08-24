<template>
  <div class="header">
    <el-row>
      <el-col :span="6"><div @click="$router.go(-1)" class="btn_back el-icon-arrow-left"></div></el-col>
      <el-col :span="12"><div class="title">登录</div></el-col>
      <el-col :span="6"><div @click="changeLoginType()" class="header">密码登陆</div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
      name: 'loginHeader',
      data: function () {
          return {};
      },
      methods: {
          changeLoginType: function () {
              alert(123)
          }
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
