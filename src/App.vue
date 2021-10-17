<template>
  <div id="app">
    <rpl-header/>
    <my-chart />
    <rpl-footer/>
    <rpl-button theme="primary">hello!</rpl-button>
  </div>
</template>

<script>

import MyChart from './components/MyChart.vue';
import RplHeader from "@dpc-sdp/ripple-site-header"; 
import RplFooter from "@dpc-sdp/ripple-site-footer"; 
import RplButton from "@dpc-sdp/ripple-button"; 




export default {
  name: 'App',
  components: {
    MyChart,
    RplHeader, 
    RplFooter,
    RplButton
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
