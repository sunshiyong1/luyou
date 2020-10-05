<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/">首页</router-link>
    <!-- <router-link to="/list?type=动漫">列表</router-link> -->
    <!-- <router-link v-for="item in types" :key="item" :to="'/list?type=' + item">{{item}}</router-link> -->
    <!-- <router-link v-for="item in types" :key="item" 
    :to="{name:'List',query: {type: item}}">{{item}}</router-link> -->
    <router-link v-for="item in types" :key="item" :to="{name:'List',query: {type:item}}">{{item}}</router-link>
    <router-view></router-view>
  </div>
    
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      types:['动漫','电影','综艺','电视剧']
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
