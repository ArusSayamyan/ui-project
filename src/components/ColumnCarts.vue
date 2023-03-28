<template>
  <div class="chartsContainer">
    <div id="chart" class="chartsContainer__lineCharts">
      <div class="chartsContainer__header">
        <p class="chartsContainer__title">transitions state</p>
        <div class="chartsContainer__select chartsContainer__select--withBorder">
          <span class="chartsContainer__selectName">All</span>
          <img :src="arrowDown" alt="" class="chartsContainer__arrowDown">
        </div>
        <div class="chartsContainer__select">
          <span class="chartsContainer__selectName">Current state</span>
          <img :src="arrowDown" alt="" class="chartsContainer__arrowDown">
        </div>
      </div>
      <apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
      <chart-wrap :chartSeries="[70, 55]" title="duo date" selectName="All"></chart-wrap>
  </div>
</template>

<script>
import {reactive} from "vue";
import ChartWrap from "@/components/ChartWrap";
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "ColumnCarts",
  components: {ChartWrap},
  setup() {
    const series = reactive( [{
      data: [1, 5, 4, 3, 2]
    }])
    const chartOptions = reactive({
      chart: {
        height: 350,
        type: 'bar',
      },
      colors: ['#1FC599', '#43BCCD', '#6D32A5', '#F53361', '#F2A201'],
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
          borderRadius: 13,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      yaxis: {
        min: 0,
        max: 6,
        tickAmount: 3
      },
      xaxis: {
        categories: [
          'TASKS',
          'KNOWLEDGR TRANSFER',
          'PRODUCTION PARALLEL',
          'LIVE EXECUTION',
          'COMPLETED',
        ],
        labels: {
          style: {
            colors: ['#A3A6B9', '#A3A6B9', '#A3A6B9', '#A3A6B9', '#A3A6B9'],
            fontSize: '12px'
          }
        }
      },
    })
      return {
        series,
        chartOptions,
        ChartWrap,
        arrowDown
      }
    },
}
</script>

<style scoped lang="scss" src="../styles/_columnCarts.scss"></style>