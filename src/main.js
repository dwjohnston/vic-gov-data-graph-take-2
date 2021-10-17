import Vue from 'vue'
import App from './App.vue'

import RplGlobal from '@dpc-sdp/ripple-global'
import {Plotly} from "vue-plotly";


const state = {
  data: [], 
  setData: function(data) {
    console.log(this);
    this.data = data; 
  }
}

async function fetchState() {


  // Unfortunately, this doesn't work. 
  // The APIs appear to not support direct requests from browsers :(
    
  // const headers = new Headers(); 
  // headers.append('apikey', '6c4f89bf-120a-466e-aaf7-77adeeaba9e8'); 
  // headers.append('Content-Type', 'application/json'); 
  // headers.append('Accept', 'application/json'); 

  // const result = await fetch('https://wovg-community.gateway.prod.api.vic.gov.au/bdm/names/v1.0/popular-baby-names?name=david', {
  //   headers
  // }); 


  // Instead I'll just pretend I'm returning data here: 

    const data = [
      {
          "position": 91,
          "name": "David",
          "count": 76,
          "sex": "MALE",
          "year": 2013
      },
      {
          "position": 91,
          "name": "David",
          "count": 83,
          "sex": "MALE",
          "year": 2008
      },
      {
          "position": 94,
          "name": "David",
          "count": 74,
          "sex": "MALE",
          "year": 2011
      },
      {
          "position": 100,
          "name": "David",
          "count": 70,
          "sex": "MALE",
          "year": 2009
      }
  ]; 

  state.setData(data);
}


fetchState();



// Install Ripple Global plugin
const rplOptions = {
  // Your custom options
  // https://github.com/dpc-sdp/ripple/tree/develop/packages/components/Atoms/Global#rploptions
  rplMarkup: { plugins: [] }
}
Vue.use(RplGlobal, rplOptions); 

Vue.use(Plotly);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    chartData: state.data,
  }
}).$mount('#app')


