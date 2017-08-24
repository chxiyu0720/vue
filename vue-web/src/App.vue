<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body,html{
    margin: 0;
    padding: 0;
    height: 100%;
    color: #324057;
  }
  #app{
    height: 100%;
  }
  html{
    font-size: 62.5%;
  }

</style>
