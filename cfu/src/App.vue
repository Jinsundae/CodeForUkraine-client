<template>
  <div id="app">
    <div id="wrapper">
      <HeaderView/>
      
      
      
      <!-- api test
      <button @click="getBtn">api test btn</button>
      -->

      <router-view :postList="postList"></router-view>

    </div>
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import postData from './assets/tempData.js'

export default {
  name: 'App',
  data() {
    return {
      postList: postData,
    }
  },
  components: {
    'HeaderView' : HeaderView,
    'FooterView' : FooterView,
    //'PostView' : PostView,
  },
  methods: {
    getBtn: function() {
      let url  = '/test';
      //console.log(url);
      this.axios.get(url)
        .then(function (response) {
          let result = response.data;
          console.log(result);
          return alert(result)
        })
        .catch(function (error) { 
          console.log('getBtn failed', error); 
        });
    }
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
}
#wrapper{
  padding-bottom: 30px;
}
.main-notice {
  font-size : 1.3rem;
  color: gray;
  margin: 15px;
  
}
</style>
