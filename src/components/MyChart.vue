<template>
  <div>


    <h3>{{title}}</h3>
    <p>{{subtitle}}</p>
    
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  name: "MyChart",
  components: { Plotly },

  

  data() {

    const rawData = this.$root.$store.state.chartData; 

    rawData.sort((a,b) => {
      return a.year - b.year; 
    }); 

    const x = rawData.map((v) => v.year);
    const y = rawData.map((v) =>v.count);


    return {

      title: "Number of babies given the name 'David' in Victoria" , 
      subtitle: "(When the name David was in the 100 most popular names)",

      data: [
        {
          x,y,
          type: "bar",
        },
      ],


      layout: {
        title: "", // Leave the title blank because we'll provide our own
         xaxis: {
           title: "Year"
         }, 
         yaxis: {
           title: "Count"
         },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
