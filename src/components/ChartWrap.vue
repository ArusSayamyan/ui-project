<template>
  <div class="chartWrap">
    <div class="chartWrap__header">
      <p class="chartWrap__title">{{ title }}</p>
      <div class="chartWrap__select">
        <span class="chartWrap__selectName">{{ selectName }}</span>
        <img :src="arrowDown" alt="" class="chartWrap__arrowDown">
      </div>
    </div>
    <div>
      <div class="chart-wrap">
        <div id="chart">
          <apexchart type="donut" width="450" :options="chartOptions" :series="chartSeries"></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowDown from '@/assets/svgs/arrowDown.svg'

export default {
  name: "ChartWrap",
  props: {
    chartSeries: {
      type: Array,
    },
    title: {
      type: String
    },
    selectName: {
      type: String
    }

  },
  setup() {
    const chartOptions = {
      colors: ['#43BCCD', '#6D32A5'],
      chart: {
        width: 380,
        type: 'donut',
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: "58%",
          }
        }
      },
      labels: ['Completed due date (3)', 'Nearing due date (2)'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'left',
        offsetY: 0,
        height: 200,
      }
    }

    return {
      chartOptions,
      arrowDown
    }
  }
}
</script>

<style src="../styles/_chartWrap.scss" lang="scss" scoped></style>