<script setup>
  import * as echarts from 'echarts';
  import {onMounted, ref} from "vue";
  const divRef = ref(null)

  onMounted(()=>{
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(divRef.value);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  })
</script>

<template>
  <div class="my-chart" ref="divRef"></div>
</template>

<style scoped lang="scss">
  .my-chart {
    width: 400px;
    height: 300px;
    margin: 100px auto;
    border: 3px solid #000;
  }
</style>