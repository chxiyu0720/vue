<template>
  <div class="index">
    <div class="index-header">
      <el-row>
        <el-col :span="14" class="pb-position pos-address">
          <span class="pos-icon"></span>
          <span class="pos-address-text pb-float-right">中华街中华路中华大厦16层</span>
        </el-col>
        <el-col :span="10">
          <span class="weather-icon pb-float-right"></span>

          <div class="weather pb-float-right">
            <p>30°</p>
            <p>多云天</p>
          </div>
        </el-col>
      </el-row>
      <el-row class="pb-margin-t5">
        <el-col :span="24">
          <el-input
            size="small"
            placeholder="搜索商家、商品名称"
            icon="search"
            v-model="earchText"
            :on-icon-click="handleIconClick">
          </el-input>
        </el-col>
      </el-row>
      <el-row class="hot-box">
        <el-col :span="22" :offset="1">
          <ul class="hot">
            <li>热门：</li>
            <li>烧烤</li>
            <li>小龙虾</li>
            <li>火锅</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="index-main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="x in 2" class="swiper-slide">
            <table>
              <tr v-for="y in 2">
                <td v-for="z in 4">
                  <figure>
                    <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                    <figcaption>冰激凌</figcaption>
                  </figure>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="grade">
        <div class="grade-title pb-clear">
          <span class="pb-float-left">品质优选</span>
          <span class="pb-float-right">
            <router-link to="more">更多</router-link>
          </span>
        </div>
        <div class="pb-flex pb-text-center">
          <div class="pb-flex-1" v-for="w in 4">
            <figure>
              <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
              <figcaption>冰激凌</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="nearby-seller">
        <div class="nearby-title">
          <span>附近商家</span>
        </div>
        <div class="nearby-seller-info">
          <div class="seller-list" v-for="m in 10">
            <div class="seller-up pb-clear">
              <div class="seller-img pb-float-left">
                <img src="static/images/public/elmlogo.jpeg" alt="" width="100%" height="100%">
              </div>
              <div class="seller-info pb-float-right">
                <div><span class="seller-type">品牌</span><h4>饿了么（百大店）</h4><span class="pb-float-right pb-margin-r10">保</span></div>
                <div><span class="seller-star">☆☆☆☆☆</span><span class="pb-margin-r10">4.0</span><span>月售2111单</span><span class="pb-float-right pb-margin-r10"><span>准时达</span><span>蜂鸟专送</span></span></div>
                <div><span class="pb-margin-r5">￥20起送</span>|<span class="pb-margin-l5">配送费￥5</span><span class="pb-float-right pb-margin-r10">2.1km | 33分钟</span></div>
              </div>
            </div>
            <div class="seller-down">
              <div class="pb-margin-t5"><span class="first-order pb-margin-r5">首</span><span>新用户下单立减50.0元</span><span class="pb-float-right pb-margin-r10">4个活动</span></div>
              <div class="pb-margin-t5"><span class="full-cut pb-margin-r5">减</span><span>满10减20，满100减99</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-footer">
      <el-row>
        <el-col :span="6">
          <img src="/static/images/public/seller.jpg" width="20px" height="15px" alt="">
          <p>商家</p>
        </el-col>
        <el-col :span="6">
          <img src="/static/images/public/find.jpg" width="20px" height="15px" alt="">
          <p>发现</p>
        </el-col>
        <el-col :span="6">
          <img src="/static/images/public/order.jpg" width="20px" height="15px" alt="">
          <p>订单</p>
        </el-col>
        <el-col :span="6" >
          <div @click="goLogin">
            <img src="/static/images/public/me.jpg" width="20px" height="15px" alt="">
            <p>我的</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'index',
      data: function () {
        return {
          earchText: ''
        }
      },
      methods: {
        handleIconClick: function (ev) {
            console.log(ev)
        },
        goLogin: function () {
          this.$router.push('/login');
        }
      },
      mounted: function () {
          console.log(111111)
          new Swiper('.swiper-container', {
              pagination: '.swiper-pagination',
              loop: true
          })
      }
  }
</script>

<style scoped>
  h4{
    margin: 0;
    display: inline-block;
  }
  .index {
    width: 100%;
    height: 100%;
    /*background: red;*/
  }
  .index-header{
    height: 8rem;
    padding-top: 2rem;
    background: #58B7FF;
    background:-moz-linear-gradient(left, #58B7FF, #20A0FF);
    background:-webkit-gradient(linear, 0 0, right 0, from(#70DAFF), to(#20A0FF));
    filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#58B7FF,endcolorstr=#20A0FF,gradientType=1);
    -ms-filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#58B7FF,endcolorstr=#20A0FF,gradientType=1);/*IE8*/
  }
  .pos-address{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    color: #fff;
  }
  .pos-address>.pos-icon{
    display: inline-block;
    width: 2rem;
    height: 3rem;
    background-image: url(/static/images/public/icon.png);
    background-position: 27rem -44.5rem;
  }
  .pos-address-text{
    width: calc(100% - 2rem);
    display: inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .weather{
    display: inline-block;
    width: 28%;
    height: 3rem;
    color: #fff;
  }
  .weather>p{
    margin: 0;
    text-align: center;
  }
  .weather-icon{
    background-image: url(/static/images/public/weater.png);
    background-position: -1rem -11rem;
    background-repeat: no-repeat;
    background-size: 30rem 23rem;
    width: 40%;
    height: 3rem;
    display: inline-block;
  }
  .hot-box{
    height: 1.8rem;
  }
  .hot{
    list-style: none;
    display: inline-block;
    margin: 0;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-left: 0;
    color: #fff;
  }
  .hot>li{
    float: left;
    margin-right: 10px;
  }
  .index-main{
    height: calc(100% - 13rem);
    background: #F1F1F1;
    overflow-y: auto;
  }
  table{
    width: 100%;
    background: #fff;
  }
  table>tr>td{
    text-align: center;
  }
  figure{
    margin: 0;
  }
  figure>img{
    width: 4rem;

  }
  .grade{
    margin-top: 1rem;
    background: #fff;
    height: 8rem;
  }
  .grade-title{
    padding: 0.5rem 1rem 0;
  }
  .nearby-seller{
    margin-top: 1rem;
    background: #fff;
  }
  .nearby-title{
    padding-left: 1rem;
  }
  .seller-list{
    height: 8rem;
    border-bottom: 1px solid #ccc;
    padding-left: 1rem;
    margin-top: 0.5rem;
  }
  .seller-up{
    height: 4rem;
  }
  .seller-img{
    width: 4rem;
    height: 100%;
    display: inline-block;
  }
  .seller-info{
    width: calc(100% - 4.5rem);
    height: 100%;
    display: inline-block;
    padding-left: 0.5rem;
  }
  .seller-type{
    display: inline-block;
    background: #e0c429;
    color: #591809;
    padding: 1px;
    margin-right: 0.5rem;
    font-size: 0.5rem;
  }
  .seller-star{
    color: #e0c429;
    margin-right: 5px;
  }
  .seller-down{
    width: calc(100% - 4.5rem);
    height: 4rem;
    padding-left: 4.5rem;
  }
  .first-order{
    display: inline-block;
    background: #11c90f;
    color: #fff;
    padding: 1px 2px;
  }
  .full-cut{
    display: inline-block;
    background: red;
    color: #fff;
    padding: 1px 2px;
  }
  .index-footer{
    width: 100%;
    height: 3rem;
    background: #fff;
    position: absolute;
    bottom: 0;
  }
  .index-footer> div{
    height: 100%;
    text-align: center;
    font-size: 0.6rem;
  }
  .index-footer p{
    margin: 0;
  }
</style>
